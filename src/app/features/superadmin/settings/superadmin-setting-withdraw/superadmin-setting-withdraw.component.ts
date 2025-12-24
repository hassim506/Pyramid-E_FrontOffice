import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';

@Component({
    selector: 'app-superadmin-setting-withdraw',
    templateUrl: './superadmin-setting-withdraw.component.html',
    styleUrl: './superadmin-setting-withdraw.component.scss',
    imports : []
})
export class SuperadminSettingWithdrawComponent {
  public routes = routes;
}
