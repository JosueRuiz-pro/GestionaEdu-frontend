import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestiona-edu-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestiona-edu-formulario.html',
  styleUrl: './gestiona-edu-formulario.css',
})
export class GestionaEduFormulario {
  @Output() cursoAgregado = new EventEmitter<any>();
  nombre = '';
  docente = '';
  descripcion = ''
  duracion: number | null = null;
  agregarCurso() {
    if (this.nombre.trim() === '' || this.docente.trim() === '' || this.descripcion.trim() === '' || this.duracion === null) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }
    const nuevoCurso = {
      id: Date.now(),
      nombre: this.nombre,
      docente: this.docente,
      descripcion: this.descripcion,
      duracion: this.duracion
    };
    this.cursoAgregado.emit(nuevoCurso);


    this.nombre = '';
    this.docente = '';
    this.descripcion = '';
    this.duracion = null;

  }


}
