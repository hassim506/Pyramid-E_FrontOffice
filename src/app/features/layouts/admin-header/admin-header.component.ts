import { Component, ElementRef, HostListener, Renderer2, ViewChild,OnInit, Input } from '@angular/core';
import { CommonService } from '../../../shared/service/common/common.service';
import { DataService } from '../../../shared/service/data/data.service';
import { SidebarService } from '../../../shared/service/sidebar/sidebar.service';
import { routes } from '../../../shared/service/routes/routes';
import { SidebarItem } from '../../../shared/models/model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { HasPermissionDirective } from '../../../directive/has-permission-directive.directive';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss'],
    imports: [CommonModule, RouterLink, HasPermissionDirective],
    standalone: true
})
export class AdminHeaderComponent implements OnInit {
    // @Input() base: string = ''; // Définir le type

   public routes = routes;
   @ViewChild('stickyMenu')
   menuElement!: ElementRef;
   headerpage = false;
   sticky = false;
   elementPosition!: number;
   public headerClass = true;
   isHovered=false;
   isFixed = false;
   isOpened = false;
   isDropdownOpen=false;
   isDropdownOpen1: number | null = null;
   @Input() base = '';
   page = '';
   last = '';
   headerMenuactive = '';
   openDropdownIndex: number | null = null;
   themeColor = 'light-mode';
   islight=true;
   isdark=false;
   sidebar: SidebarItem[];
     isLoggedIn = false;
  currentUser: any = null;

   constructor(
     private common: CommonService,
     private data: DataService,
     public sidebarService: SidebarService,
     private renderer: Renderer2,
     private authService: AuthService,
   ) {
     this.common.base.subscribe((res: string) => {
       this.base = res;
     });
     this.common.page.subscribe((res: string) => {
       this.page = res;
     });
     this.common.last.subscribe((res: string) => {
       this.last = res;
     });
     this.sidebar = this.data.sideBar;
     this.sidebarService.themeColors.subscribe((res: string) => {
      this.themeColor = res;
    });

   }

   @HostListener('window:scroll', [])
   onWindowScroll() {
     // Add a fixed class when the scroll position is greater than 50px
     this.isFixed = window.pageYOffset > 40;
   }

   public toggleSidebar(): void {
      this.sidebarService.openSidebar();
    this.isOpened=!this.isOpened;
    if(this.isOpened===true){
    this.renderer.addClass(document.documentElement,'menu-opened')
    }
    else{
      this.renderer.removeClass(document.documentElement,'menu-opened')
    }
   }
   public hideSidebar(): void {
     this.sidebarService.closeSidebar();
    this.isOpened=false;
    this.renderer.removeClass(document.documentElement,'menu-opened')
   }

   openSubMenu():void{
     this.isDropdownOpen=!this.isDropdownOpen;
     this.openDropdownIndex=null;
   }
   openSubMenu1(index: number):void{
     this.isDropdownOpen1=this.isDropdownOpen1 === index? null :index;
   }
   toggleSubMenu(index: number): void {
     // If the clicked menu is already open, close it
     this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
     this.isDropdownOpen=false;
   }
   switchTheme():void{
    this.isdark=!this.isdark;
    this.islight=!this.islight;
  }
  ngOnInit(): void {
    const themeColor = localStorage.getItem('themeColor') || 'light-mode';
    this.sidebarService.changeThemeColor(themeColor);
        this.checkLoginStatus();

  }
checkLoginStatus(): void {
   this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.currentUser = this.authService.getUser();
      console.log('currentUser complet:', JSON.stringify(this.currentUser)); // ← TOUT l'objet
      console.log('role_id:', this.currentUser?.role_id);
      // Définir le base selon le role_id de l'utilisateur
      if (this.currentUser?.role_id === 1) {
        this.base = 'admin';
      } else if (this.currentUser?.role_id === 2) {
        this.base = 'student';
      } else if (this.currentUser?.role_id === 3) {
        this.base = 'formateur';
      }
    }
    /*this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.currentUser = this.authService.getUser();
      console.log('Current user in header:', this.currentUser);

      // Définir le base selon le role_id de l'utilisateur
      if (this.currentUser?.role_id === 1) {
        this.base = 'admin';
      } else if (this.currentUser?.role_id === 2) {
        this.base = 'student';
      } else if (this.currentUser?.role_id === 3) {
        this.base = 'formateur';
      }
    }
      */
  }
 getDefaultAvatar(): string {
    if (!this.currentUser?.role_id) return 'assets/img/avatar/avatar.png';

    switch (this.currentUser.role_id) {
      case 1: return 'assets/img/avatar/avatar.png'; // Admin
      case 2: return 'assets/img/avatar/avatar.png'; // Student
      case 3: return 'assets/img/avatar/avatar.png'; //  Instructor
      default: return 'assets/img/avatar/avatar.png';
    }
  }

  isRhUser(): boolean {
    if (!this.currentUser) return false;
    const staticRhIds = [4, 5, 9, 14];
    if (staticRhIds.includes(this.currentUser.role_id)) return true;
    const roleType = this.currentUser.role_type ?? this.currentUser['role_type'] ?? '';
    if (roleType === 'rh') return true;
    // Rôle dynamique : vérifier le nom du rôle pour les Holding non listés
    const roleName: string = (this.currentUser.role?.name ?? '').toLowerCase();
    return roleName.includes('rh') || roleName.includes('holding') || roleName.includes('admin');
  }

  isEmployee(): boolean {
    if (!this.currentUser) return false;
    if (this.currentUser.role_id === 2) return true;
    const roleType = this.currentUser.role_type ?? this.currentUser['role_type'] ?? '';
    return roleType === 'employe';
  }

  isSuperAdmin(): boolean {
    if (!this.currentUser) return false;
    if (this.currentUser.role_id === 1) return true;
    const roleType = this.currentUser.role_type ?? this.currentUser['role_type'] ?? '';
    return roleType === 'admin';
  }

  isInstructor(): boolean {
    if (!this.currentUser) return false;
    if (this.currentUser.role_id === 3) return true;
    const roleType = this.currentUser.role_type ?? this.currentUser['role_type'] ?? '';
    return roleType === 'formateur';
  }

  hasPermission(permission: string): boolean {
    if (!this.currentUser) return false;
    const perms: any[] = this.currentUser.permissions ?? [];
    // Supporte tableau de strings ou tableau d'objets { name: string }
    return perms.some(p => (typeof p === 'string' ? p : p?.name) === permission);
  }

  private formatRoleName(name: string): string {
    return name.replace(/\bAdmin\b/g, 'Administrateur');
  }

  getRoleLabel(): string {
    if (!this.currentUser) return 'Utilisateur';
    // Priorité : nom du rôle retourné par le backend (dynamique, fiable)
    if (this.currentUser.role?.name) return this.formatRoleName(this.currentUser.role.name);
    // Fallback : IDs statiques des rôles système
    switch (this.currentUser.role_id) {
      case 1:  return 'Super Admin';
      case 2:  return 'Employé';
      case 3:  return 'Formateur';
      case 4:  return 'Responsable RH';
      case 5:  return 'Administrateur RH Holding';
      case 9:  return 'Administrateur RH';
      case 14: return 'Super Admin RH Holding';
      default: {
        // Fallback final : déduire depuis role_type
        const rt = this.currentUser.role_type ?? '';
        if (rt === 'rh') return 'Admin RH';
        if (rt === 'admin') return 'Administrateur';
        return 'Utilisateur';
      }
    }
  }

  getProfileRoute(): string {
    if (!this.currentUser?.role_id) return this.routes.login;

    switch (this.currentUser.role_id) {
      case 1: return this.routes.superadminProfile;
      case 2: return this.routes.studentProfile;
      case 3: return this.routes.instructorProfile;
      default: return this.routes.login;
    }
  }

  getSettingsRoute(): string {
    if (!this.currentUser?.role_id) return this.routes.login;

    switch (this.currentUser.role_id) {
      case 1: return this.routes.instructorSettings;
      case 2: return this.routes.instructorSettings;
      case 3: return this.routes.studentSettings;
      default: return this.routes.login;
    }
  }

  logout(): void {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      this.authService.logout();
      this.isLoggedIn = false;
      this.currentUser = null;
    }
  }



}
