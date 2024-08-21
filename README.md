# MyrluxFront

## Descripción
MyrluxFront es la aplicación frontend para la gestión de alumnos en una institución educativa. Proporciona una interfaz de usuario intuitiva y reactiva para interactuar con la API RESTful de MyrluxBack, permitiendo crear, leer, actualizar y eliminar información de alumnos.

## Tecnologías Principales
- Angular 17.0.0
- TypeScript
- RxJS
- Angular CLI
- Angular Forms (Reactive Forms)
- Angular Router
- HttpClient para comunicación con la API
- Bootstrap 5 para estilos y componentes de UI

## Requisitos Previos
- Node.js (versión recomendada para Angular 17)
- npm (normalmente viene con Node.js)
- Angular CLI 17.0.0

## Configuración
1. Clona el repositorio:
   ```
   git clone https://github.com/ebercruzf/myrlux-front.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd myrlux-front
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución
Para ejecutar la aplicación en modo desarrollo:
```
ng serve
```
La aplicación estará disponible en `http://localhost:4200`

## Construcción
Para construir la aplicación para producción:
```
ng build
```
Los archivos de la construcción se almacenarán en el directorio `dist/`.

## Pruebas
- Para ejecutar las pruebas unitarias:
  ```
  ng test
  ```
- Para ejecutar las pruebas end-to-end:
  ```
  ng e2e
  ```

## Características Principales
- Interfaz de usuario para gestión de alumnos usando Bootstrap 5
- Formularios reactivos para crear y editar información de alumnos
- Lista de alumnos con opciones de edición y eliminación
- Comunicación reactiva con la API backend de MyrluxBack
- Manejo de errores y validaciones del lado del cliente
- Sincronización de validaciones entre el backend y el frontend

## Estructura del Proyecto
- `src/app/`
    - `components/`: Componentes de Angular
    - `models/`: Interfaces y modelos de datos
    - `services/`: Servicios para la lógica de negocio y comunicación con la API
    - `app-routing.module.ts`: Configuración de rutas
    - `app.component.*`: Componente raíz de la aplicación
    - `app.config.ts`: Configuración de la aplicación
- `src/assets/`: Recursos estáticos
- `src/environments/`: Configuraciones de entorno
- `src/main.ts`: Punto de entrada de la aplicación

## Componentes Principales
- `AlumnoListComponent`: Muestra la lista de alumnos
- `AlumnoFormComponent`: Formulario reactivo para crear y editar alumnos

## Servicios
- `AlumnoService`: Maneja la comunicación reactiva con la API de MyrluxBack

## Validaciones
Las validaciones implementadas en el backend se replican en el frontend para proporcionar una experiencia de usuario coherente y evitar envíos de datos inválidos. Esto incluye:

- Validación de campos obligatorios
- Validación de formato de email
- Validación de fechas (nacimiento e ingreso)
- Validación de longitud de campos (nombre, apellido, dirección, etc.)

## Manejo de Errores
La aplicación maneja los errores de forma reactiva, mostrando mensajes de error apropiados tanto para errores de validación como para errores de servidor.

## Integración con Backend
Esta aplicación está diseñada para trabajar con MyrluxBack. Asegúrate de que el backend esté en ejecución en `http://localhost:11002` o actualiza la URL base en `AlumnoService` si es necesario.

## Estilo y Diseño
La aplicación utiliza Bootstrap 5 para el diseño y los componentes de la interfaz de usuario. Los estilos se aplican a través de clases de Bootstrap en los templates HTML.

## Configuración de la Aplicación
La configuración principal de la aplicación se encuentra en `app.config.ts`, donde se configuran los providers para el enrutamiento, el cliente HTTP y la hidratación del cliente.

## Punto de Entrada
El archivo `main.ts` es el punto de entrada de la aplicación, donde se inicializa el componente raíz (`AppComponent`) con la configuración definida en `app.config.ts`.

## Contribución
Las contribuciones son bienvenidas. Por favor, asegúrate de seguir las mejores prácticas de Angular y mantener la consistencia con el estilo de código existente.

## Documentación Adicional
Para más información sobre Angular CLI, visita la [Descripción general y referencia de comandos de Angular CLI](https://angular.io/cli).

## Licencia
Este proyecto está licenciado bajo la Licencia [NOMBRE DE LA LICENCIA] - vea el archivo LICENSE.md para más detalles.

## Contacto
© 2024 MyrluxApp [ebercruz.com](https://ebercruz.com)
