import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-student-settings',
    templateUrl: './student-settings.component.html',
    styleUrl: './student-settings.component.scss',
    imports : [CommonModule,RouterLink,MatSelectModule,BsDatepickerModule]
})
export class StudentSettingsComponent {
  public routes = routes;
}
