import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestiona-edu-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestiona-edu-header.html',
  styleUrl: './gestiona-edu-header.css',
})
export class GestionaEduHeader {
  Titulo = "GestionaEdu";
  descripcion = "Sistema web de gestión de cursos: formularios, inscripciones y administración de usuarios.";
  mensaje = "¡Bienvenido a GestionaEdu! Tu plataforma de gestión educativa integral. Aquí encontrarás herramientas para administrar cursos, gestionar inscripciones con el objetivo de facilitar la experiencia educativa. ¡Explora nuestras funcionalidades y optimiza tu experiencia con nosotros!";
  mensajeVisible = true;
  mostrarMensaje() {
    this.mensajeVisible = !this.mensajeVisible;
  }

}
