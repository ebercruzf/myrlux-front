import { Routes } from '@angular/router';

import { AlumnoListComponent } from './components/alumno/alumno-list/alumno-list.component';
import { AlumnoFormComponent } from './components/alumno/alumno-form/alumno-form.component';

export const routes: Routes = [
  { path: 'alumnos', component: AlumnoListComponent },
  { path: 'alumno/nuevo', component: AlumnoFormComponent },
  { path: 'alumno/editar/:id', component: AlumnoFormComponent },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
];
