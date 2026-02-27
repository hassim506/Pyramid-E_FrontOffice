import { Component, ElementRef, HostListener, Renderer2, ViewChild,OnInit, Input } from '@angular/core';
import { CommonService } from '../../../shared/service/common/common.service';
import { DataService } from '../../../shared/service/data/data.service';
import { SidebarService } from '../../../shared/service/sidebar/sidebar.service';
import { routes } from '../../../shared/service/routes/routes';
import { SidebarItem } from '../../../shared/models/model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/service/authentification/auth.service';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss'],
    imports: [CommonModule,RouterLink]
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
    private router: Router
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
    }
    this.isLoggedIn = this.authService.isLoggedIn();
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

  getRoleLabel(): string {
    if (!this.currentUser?.role_id) return 'User';

    switch (this.currentUser.role_id) {
      case 1: return 'Super Admin';
      case 2: return 'Apprenant';
      case 3: return 'Formateur';
      case 4: return 'Responsable RH';
      case 5: return 'Administrateur RH Holding';
      case 6: return 'Gestionnaire de Contenu';
      case 7: return 'Support Technique';
      case 8: return 'Auditeur';
      case 9: return 'Administrateur RH';
      case 10: return 'Manageur';
      case 11: return 'Administrateur';
      case 13: return 'Consultant';      
      case 14: return 'Super Admin RH Holding Groupe';      
  
      default: return 'User';
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
