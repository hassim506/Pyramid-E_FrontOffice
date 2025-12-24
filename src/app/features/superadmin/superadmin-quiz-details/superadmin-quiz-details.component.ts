import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-superadmin-quiz-details',
    templateUrl: './superadmin-quiz-details.component.html',
    styleUrl: './superadmin-quiz-details.component.scss',
    imports:[CommonModule,RouterLink]
})
export class SuperadminQuizDetailsComponent {
  public routes = routes

}
