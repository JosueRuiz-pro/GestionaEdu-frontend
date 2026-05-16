import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionaEduHeader } from './gestiona-edu-header/gestiona-edu-header';
import { GestionaEduListacursos } from './gestiona-edu-listacursos/gestiona-edu-listacursos';
import { GestionaEduFormulario } from './gestiona-edu-formulario/gestiona-edu-formulario';
import { GestionaEduFooter } from './gestiona-edu-footer/gestiona-edu-footer';

interface Curso {
  id: number;
  nombre: string;
  docente: string;
  estado: boolean;
  descripcion: string;
  duracion: number;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule, GestionaEduHeader, GestionaEduListacursos, GestionaEduFormulario, GestionaEduFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cursos: Curso[] = [
    { id: 1, nombre: 'Matemáticas', docente: 'Dr. Juan Pérez', estado: true, descripcion: 'Curso de matemáticas básicas', duracion: 40 },
    { id: 2, nombre: 'Historia', docente: 'Dra. María Gómez', estado: false, descripcion: 'Curso de historia universal', duracion: 30 },
    { id: 3, nombre: 'Programación', docente: 'Ing. Carlos López', estado: true, descripcion: 'Curso de programación en Python', duracion: 50 },
  ];
  agregarCurso(nuevoCurso: Curso) {
    this.cursos.push(nuevoCurso);
  }
  eliminarCurso(cursoId: number) {
    this.cursos = this.cursos.filter(curso => curso.id !== cursoId);
  }
}
