import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';

@Component({
    selector: 'app-adminrh-setting-withdraw',
    templateUrl: './adminrh-setting-withdraw.component.html',
    styleUrl: './adminrh-setting-withdraw.component.scss',
    imports : []
})
export class AdminrhSettingWithdrawComponent {
  public routes = routes;
}
