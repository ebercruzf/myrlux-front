import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlumnoListComponent } from './components/alumno/alumno-list/alumno-list.component';
import { AlumnoFormComponent } from './components/alumno/alumno-form/alumno-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlumnoListComponent, AlumnoFormComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'myrlux-front';
  showEasterEgg: boolean = false;
  developerName: string = 'Eber Cruz';
  developerWebsite: string = 'https://www.ebercruz.com';
  
  ngOnInit() {
   
  }

  
}
