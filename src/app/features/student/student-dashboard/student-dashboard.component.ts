import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
  import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-student-dashboard',
    templateUrl: './student-dashboard.component.html',
    styleUrl: './student-dashboard.component.scss',
    imports : [CommonModule,RouterLink],
})
export class StudentDashboardComponent {
  public routes = routes;
  isSelected:boolean[]=[false];
  iconSelect(index:number) : void{
    this.isSelected[index]=!this.isSelected[index]
    }
}
