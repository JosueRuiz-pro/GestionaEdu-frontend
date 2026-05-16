import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Curso {
  id: number;
  nombre: string;
  docente: string;
  estado: boolean;
  descripcion: string;
  duracion: number;
}
@Component({
  selector: 'app-gestiona-edu-listacursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestiona-edu-listacursos.html',
  styleUrl: './gestiona-edu-listacursos.css',
})
export class GestionaEduListacursos {
  @Input() cursos: Curso[] = [];
  @Output() eliminarCurso = new EventEmitter<number>();
  cambiarEstado(curso: Curso) {
    curso.estado = !curso.estado;
  }
  eliminar(cursoId: number) {
    this.eliminarCurso.emit(cursoId);
  }
  

}