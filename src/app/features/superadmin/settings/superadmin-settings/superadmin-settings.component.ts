import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
    selector: 'app-superadmin-settings',
    templateUrl: './superadmin-settings.component.html',
    styleUrl: './superadmin-settings.component.scss',
    imports : [RouterLink,BsDatepickerModule]
})
export class SuperadminSettingsComponent {
  public routes = routes;
}
