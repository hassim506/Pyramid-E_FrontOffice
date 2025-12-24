import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';

@Component({
    selector: 'app-superadmin-setting-notifications',
    templateUrl: './superadmin-setting-notifications.component.html',
    styleUrl: './superadmin-setting-notifications.component.scss',
    imports : []
})
export class SuperadminSettingNotificationsComponent {
  public routes = routes;
}
