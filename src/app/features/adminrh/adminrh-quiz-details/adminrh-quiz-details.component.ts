import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-adminrh-quiz-details',
    templateUrl: './adminrh-quiz-details.component.html',
    styleUrl: './adminrh-quiz-details.component.scss',
    imports:[CommonModule,RouterLink]
})
export class AdminrhQuizDetailsComponent {
  public routes = routes

}
