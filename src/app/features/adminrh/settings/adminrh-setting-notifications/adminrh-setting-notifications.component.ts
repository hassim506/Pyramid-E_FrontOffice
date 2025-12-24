import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';

@Component({
    selector: 'app-adminrh-setting-notifications',
    templateUrl: './adminrh-setting-notifications.component.html',
    styleUrl: './adminrh-setting-notifications.component.scss',
    imports : []
})
export class AdminrhSettingNotificationsComponent {
  public routes = routes;
}
