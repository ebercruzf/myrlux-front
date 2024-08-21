import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Alumno } from '../models/alumno';

interface ApiResponse<T> {
  data: T;
  message: string;
  code: string;
  success: boolean;
  errors: string[] | null;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private baseUrl = 'http://localhost:11002/api';

  constructor(private http: HttpClient) { }

  createAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<ApiResponse<Alumno>>(`${this.baseUrl}/crear/alumno`, alumno)
      .pipe(
        map(response => this.processResponse(response)),
        catchError(this.handleError)
      );
  }

  updateAlumno(id: string, alumno: Alumno): Observable<Alumno> {
    return this.http.put<ApiResponse<Alumno>>(`${this.baseUrl}/actualizar/alumno/${id}`, alumno)
      .pipe(
        map(response => this.processResponse(response)),
        catchError(this.handleError)
      );
  }

  getAlumnoById(id: string): Observable<Alumno> {
    return this.http.get<ApiResponse<Alumno>>(`${this.baseUrl}/obtener/alumno/${id}`)
      .pipe(
        map(response => this.processResponse(response)),
        catchError(this.handleError)
      );
  }

  findAll(): Observable<Alumno[]> {
    return this.http.get<ApiResponse<Alumno[]>>(`${this.baseUrl}/lista/alumno`)
      .pipe(
        map(response => this.processResponse(response)),
        catchError(this.handleError)
      );
  }

  deleteAlumno(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminar/alumno/${id}`)
      .pipe(catchError(this.handleError));
  }

  private processResponse<T>(response: ApiResponse<T>): T {
    if (response.success) {
      return response.data;
    } else {
      throw new Error(response.message);
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    let errors: string[] = [];

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (error.status === 500) {
        errorMessage = 'Error interno del servidor al procesar la solicitud';
      } else if (error.error && typeof error.error === 'object') {
        errorMessage = error.error.message || 'Server error';
        errors = error.error.errors || [];
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }

    console.error('Error details:', errorMessage, errors);
    return throwError(() => ({ message: errorMessage, errors: errors }));
  }
}