
# Sistema de Reclamos - Frontend

Este proyecto es una aplicación web desarrollada con **Angular 17**, diseñada para gestionar reclamos en un sistema de comercio electrónico. La aplicación permite a los usuarios consultar, crear, y modificar el estado de los reclamos. 

## Requerimientos

- **Node.js** (versión 14 o superior)
- **Angular CLI** (versión 17 o superior)
- **npm** para la gestión de paquetes

## Funcionalidades

### 1. Consultar Reclamos
En la vista principal de la aplicación, se muestra un listado de reclamos con las siguientes columnas:
- **Código**
- **Empresa**
- **Motivo**
- **Estado** (pendiente, en revisión, cerrada, anulada)
- **Ver Detalle** (permite consultar el detalle de un reclamo)
- **Cambiar Estado** (permite actualizar el estado de un reclamo)

### 2. Crear Reclamo
En esta página, el usuario puede crear un nuevo reclamo proporcionando los siguientes datos:
- **Empresa**: Lista desplegable de las empresas registradas.
- **Motivo**: Lista desplegable de los motivos predefinidos.
- **Descripción**: Detalle del reclamo.
- **Correo electrónico**: Se valida que sea un formato de correo válido.
- **Estado**: Predeterminado a "Pendiente" y es solo lectura.

### 3. Ver Detalle de Reclamo
Permite consultar la información detallada de un reclamo, mostrando campos en solo lectura como:
- **Código**
- **Empresa**
- **Motivo**
- **Descripción**
- **Correo del Cliente**
- **Fecha de creación**

### 4. Cambiar Estado del Reclamo
Permite actualizar el estado de un reclamo. El usuario puede seleccionar el estado al que quiere cambiar, como "En revisión", "Cerrada" o "Anulada", y agregar un comentario sobre la actualización.

## Estructura del Proyecto

El proyecto sigue la estructura modular para mantener el código organizado y facilitar la escalabilidad.

```
src/
│
├── app/
│   ├── core/
│   │   ├── models/  --> Modelos de datos (Claim, MasterData)
│   │   ├── services/ --> Servicios (ClaimsService, MasterDataService)
│   ├── features/   --> Componentes principales (claim-form, claim-detail, change-status, claims-list)
│   ├── layout/     --> Componente layout principal (menu lateral y estructura)
│   └── shared/     --> Estilos compartidos, componentes reutilizables
├── assets/         --> Recursos estáticos
├── environments/   --> Configuración de entornos
└── styles.scss     --> Estilos generales
```

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone <url-del-repositorio>
   ```

2. Navegar al directorio del proyecto:

   ```bash
   cd claims-app-ui
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   ng serve
   ```

   La aplicación estará disponible en `http://localhost:4200`.

## Entornos

El proyecto soporta múltiples entornos (desarrollo, producción). Puedes configurar los endpoints del backend en los archivos `environment.ts` y `environment.prod.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'  // URL del backend en desarrollo
};
```

```ts
export const environment = {
  production: true,
  apiUrl: 'https://mi-api-produccion.com'  // URL del backend en producción
};
```

## Endpoints de Backend

La aplicación se comunica con los siguientes servicios de backend:

- **ClaimsController**:
  - `GET /claims`: Obtener todos los reclamos.
  - `GET /claims/{id}`: Obtener un reclamo por su ID.
  - `POST /claims`: Crear un nuevo reclamo.
  - `POST /claims/{id}/status`: Actualizar el estado de un reclamo.

- **MasterDataController**:
  - `GET /api/master-data`: Obtener todos los datos (estados, motivos, empresas).
  - `GET /api/master-data/statuses`: Obtener la lista de estados.
  - `GET /api/master-data/reasons`: Obtener la lista de motivos.
  - `GET /api/master-data/companies`: Obtener la lista de empresas.

## Pruebas

Para ejecutar las pruebas unitarias, puedes utilizar el siguiente comando:

```bash
ng test
```

Esto lanzará el conjunto de pruebas en un entorno de desarrollo.

## Buenas Prácticas Implementadas

- **Componentes Standalone**: El proyecto está basado en componentes standalone para simplificar la estructura de módulos y facilitar la reutilización.
- **Modularidad**: Servicios, modelos, y componentes organizados en módulos para mejorar la escalabilidad.
- **Estilos Compartidos**: Estilos comunes se han centralizado en `shared-styles.scss` para mantener la consistencia en todas las páginas.
- **Uso de Formularios Reactivos**: Se utiliza `FormGroup` para gestionar la validación de los formularios de manera reactiva.

## Estilos

Los estilos de la aplicación están centralizados y organizados. Algunas convenciones:
- Los formularios y tarjetas (`.card`) tienen un diseño uniforme.
- Los botones están alineados y centrados.
- Los mensajes de error se muestran en rojo para mayor visibilidad.
- Los campos `readonly` se estilizan con un fondo diferente para evitar confusiones.

## Despliegue

Para realizar el build de la aplicación para producción, ejecuta:

```bash
ng build --prod
```

Esto generará los archivos minificados y optimizados en la carpeta `dist/`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT.
