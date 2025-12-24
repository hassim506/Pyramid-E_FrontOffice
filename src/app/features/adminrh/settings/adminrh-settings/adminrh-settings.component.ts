import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
    selector: 'app-adminrh-settings',
    templateUrl: './adminrh-settings.component.html',
    styleUrl: './adminrh-settings.component.scss',
    imports : [RouterLink,BsDatepickerModule]
})
export class AdminrhSettingsComponent {
  public routes = routes;
}
