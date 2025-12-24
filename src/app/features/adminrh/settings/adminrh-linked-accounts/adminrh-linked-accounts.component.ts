import { Component } from '@angular/core';
import { routes } from '../../../../app.routes';

@Component({
  selector: 'app-adminrh-linked-accounts',
  imports:[],
  templateUrl: './adminrh-linked-accounts.component.html',
  styleUrl: './adminrh-linked-accounts.component.scss'
})
export class AdminrhLinkedAccountsComponent {
public routes = routes;
}
