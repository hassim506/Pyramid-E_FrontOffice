import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-superadmin-quiz-questions',
  imports:[CommonModule,RouterLink,FormsModule,MatSelectModule],
  templateUrl: './superadmin-quiz-questions.component.html',
  styleUrl: './superadmin-quiz-questions.component.scss'
})
export class SuperadminQuizQuestionsComponent {
routes=routes
formData: any[] = []; // Initialize with an empty object to start with one row

addNewRow() {
  this.formData.push({});
}

removeRow(index: number) {
    this.formData.splice(index, 1);
}

}
