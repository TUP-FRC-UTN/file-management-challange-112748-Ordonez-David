import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { FilesTableComponent } from './files-table/files-table.component';
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilesTableComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';

  showForm: boolean = false;

  setShowFormTrue(){
    this.showForm = true;
  }

  
  

  tableData: any; // Arreglo para almacenar los datos del formulario

  // Método que recibe los datos del formulario
  onFormSubmitted(data: any) {
    this.tableData.push(data); // Agrega los datos recibidos a la tabla
  }


}
