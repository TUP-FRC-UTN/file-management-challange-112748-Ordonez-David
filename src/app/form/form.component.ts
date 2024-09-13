import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {


  
  formData = {
    name: '',
    date: ''
  };


  onSubmit() {
  this.formSubmitted.emit(this.formData);

  this.formData = { name: '', date: '' };
}

@Output() formSubmitted = new EventEmitter<any>();




}
