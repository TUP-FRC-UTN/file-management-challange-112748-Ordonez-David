import { Component, OnInit } from '@angular/core';
import { OWNERS, FILE_LIST } from '../../data/file.storage';
import { FileItem, FileOwner } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-files-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './files-table.component.html',
  styleUrl: './files-table.component.css'
})
export class FilesTableComponent implements OnInit {

  fileList: FileItem[] = [];
  owners: FileOwner[] = [];

  ngOnInit(): void {
    // Aquí asignas los valores importados a las variables del componente
    this.fileList = FILE_LIST;
    this.owners = OWNERS;



    console.log("ARCHIVOS", this.fileList)
    console.log("Dueños", this.owners)
  }

}
