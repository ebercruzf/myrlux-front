import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Alumno } from '../../../models/alumno';
import { AlumnoService } from '../../../services/alumno.service';

@Component({
  selector: 'app-alumno-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alumno-list.component.html',
  styleUrl: './alumno-list.component.css'
})
export class AlumnoListComponent implements OnInit {
  title = 'Lista de alumnos';
  alumnos: Alumno[] = [];
  errorMessage: string = '';
  errorDetails: string[] = [];

  constructor(
    private alumnoService: AlumnoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAlumnos();
  }

  loadAlumnos(): void {
    this.alumnoService.findAll().subscribe({
      next: (data: Alumno[]) => {
        this.alumnos = data;
        this.errorMessage = '';
        this.errorDetails = [];
      },
      error: (error: any) => {
        console.error('Error loading alumnos:', error);
        this.errorMessage = error.message || 'Hubo un error al cargar los alumnos.';
        this.errorDetails = error.errors || [];
      }
    });
  }

  deleteAlumno(id: string | undefined): void {
    if (!id) {
      console.error('Intento de eliminar un alumno sin ID');
      return;
    }
    if (confirm('¿Estás seguro de que quieres eliminar este alumno?')) {
      this.alumnoService.deleteAlumno(id).subscribe({
        next: () => {
          console.log('Alumno eliminado exitosamente');
          this.loadAlumnos(); // Recargar la lista después de eliminar
        },
        error: (error: any) => {
          console.error('Error deleting alumno:', error);
          this.errorMessage = error.message || 'Hubo un error al eliminar el alumno.';
          this.errorDetails = error.errors || [];
        }
      });
    }
  }

  navigateToNewAlumno(): void {
    console.log('Navegando a nuevo alumno');
    this.router.navigate(['/alumno/nuevo']);
  }
}