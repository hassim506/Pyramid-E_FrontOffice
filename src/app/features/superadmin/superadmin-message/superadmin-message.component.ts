import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-superadmin-message',
  imports:[CommonModule,RouterLink],
  templateUrl: './superadmin-message.component.html',
  styleUrl: './superadmin-message.component.scss'
})
export class SuperadminMessageComponent {
routes=routes;
isSearch=false;
openSearch():void{
  this.isSearch=!this.isSearch
}
}
