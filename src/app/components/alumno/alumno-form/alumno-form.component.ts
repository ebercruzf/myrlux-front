import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Alumno } from '../../../models/alumno';
import { AlumnoService } from '../../../services/alumno.service';

@Component({
  selector: 'app-alumno-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alumno-form.component.html',
  styleUrl: './alumno-form.component.css'
})
export class AlumnoFormComponent implements OnInit {
  title = 'Formulario de Alumnos';
  alumno: Alumno = {} as Alumno;
  isEditing: boolean = false;
  errorMessage: string = '';
  validationErrors: string[] = [];

  constructor(
    private alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('AlumnoFormComponent inicializado');
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.loadAlumno(id);
    }
  }

  loadAlumno(id: string): void {
    this.alumnoService.getAlumnoById(id).subscribe({
      next: (data: Alumno) => this.alumno = data,
      error: (error) => {
        console.error('Error loading alumno:', error);
        this.errorMessage = 'Error al cargar el alumno';
      }
    });
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.validationErrors = [];

    const operation = this.isEditing
      ? this.alumnoService.updateAlumno(this.alumno.id!, this.alumno)
      : this.alumnoService.createAlumno(this.alumno);

    operation.subscribe({
      next: (alumno: Alumno) => {
        console.log(`Alumno ${this.isEditing ? 'actualizado' : 'creado'}:`, alumno);
        this.router.navigate(['/alumnos']);
      },
      error: (error: any) => {
        console.error(`Error ${this.isEditing ? 'actualizando' : 'creando'} alumno:`, error);
        this.errorMessage = error.message || `Error al ${this.isEditing ? 'actualizar' : 'crear'} el alumno`;
        this.validationErrors = error.errors || [];
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/alumnos']);
  }
}