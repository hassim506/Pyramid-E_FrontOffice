import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { DataService } from '../../shared/service/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { forgotPassword, welcomeLogin } from '../../shared/models/model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    imports: [CommonModule,FormsModule,RouterLink,SlickCarouselModule]
})
export class ForgotPasswordComponent {
 public routes = routes;
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
     this.router.navigate([routes.setPassword]);
   }
}
