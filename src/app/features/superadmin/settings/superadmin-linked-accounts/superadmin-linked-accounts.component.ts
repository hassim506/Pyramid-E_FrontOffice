import { Component } from '@angular/core';
import { routes } from '../../../../app.routes';

@Component({
  selector: 'app-superadmin-linked-accounts',
  imports:[],
  templateUrl: './superadmin-linked-accounts.component.html',
  styleUrl: './superadmin-linked-accounts.component.scss'
})
export class SuperadminLinkedAccountsComponent {
public routes = routes;
}
