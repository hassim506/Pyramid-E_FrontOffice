import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { welcomeLogin } from '../../shared/models/model';
import { DataService } from '../../shared/service/data/data.service';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-otp',
  imports: [CommonModule,FormsModule,RouterLink,InputOtpModule,SlickCarouselModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent {
  routes=routes;
  value : any
   public welcomeLogin: welcomeLogin[] = [];
     password: boolean = false; // Add more as needed
    
     togglePassword(): void {
       this.password= !this.password;
     }
     public authSlider ={
       dots: true,
           infinite: false,
           speed: 300,
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false,
           responsive: [
             {
             breakpoint: 1300,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
             }
             },
             {
             breakpoint: 768,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
             }
           ]
     }
   
     constructor(private DataService: DataService, public router: Router) {
       this.welcomeLogin = this.DataService.welcomeLogin;
     }
   
     directIndex() {
       this.router.navigate([routes.instructor_dashboard]);
     }
}
