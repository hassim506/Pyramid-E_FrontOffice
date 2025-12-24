import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-adminrh-quiz-questions',
  imports:[CommonModule,RouterLink,FormsModule,MatSelectModule],
  templateUrl: './adminrh-quiz-questions.component.html',
  styleUrl: './adminrh-quiz-questions.component.scss'
})
export class AdminrhQuizQuestionsComponent {
routes=routes
formData: any[] = []; // Initialize with an empty object to start with one row

addNewRow() {
  this.formData.push({});
}

removeRow(index: number) {
    this.formData.splice(index, 1);
}

}
