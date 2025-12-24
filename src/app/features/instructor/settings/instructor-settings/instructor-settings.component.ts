import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
    selector: 'app-instructor-settings',
    templateUrl: './instructor-settings.component.html',
    styleUrl: './instructor-settings.component.scss',
    imports : [RouterLink,BsDatepickerModule]
})
export class InstructorSettingsComponent {
  public routes = routes;
}
