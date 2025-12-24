import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adminrh-message',
  imports:[CommonModule,RouterLink],
  templateUrl: './adminrh-message.component.html',
  styleUrl: './adminrh-message.component.scss'
})
export class AdminrhMessageComponent {
routes=routes;
isSearch=false;
openSearch():void{
  this.isSearch=!this.isSearch
}
}
