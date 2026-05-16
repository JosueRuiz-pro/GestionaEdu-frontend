import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestiona-edu-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestiona-edu-footer.html',
  styleUrl: './gestiona-edu-footer.css',
})
export class GestionaEduFooter {
  Titulo = "©GestionaEdu";
  Anio = new Date().getFullYear();

}
