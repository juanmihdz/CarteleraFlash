# CarteleraFlash:
Requisitos funcionales:

### Requisitos Funcionales

#### 1. **Búsqueda de Cartelera por Ciudad**
   - **Descripción**: El sistema permitirá a los usuarios buscar películas en los cines de una ciudad específica.
   - **Entrada**: Campo de texto para ingresar el nombre de la ciudad con autocompletado.
   - **Salida**: Lista de películas proyectadas en los cines de la ciudad seleccionada.

#### 2. **Búsqueda de Películas por Título**
   - **Descripción**: Los usuarios podrán buscar una película específica por su título después de haber seleccionado la ciudad.
   - **Entrada**: Campo de texto para ingresar el título de la película.
   - **Salida**: Lista de horarios y cines que proyectan la película seleccionada en la ciudad.

#### 3. **Filtrado por Cines Preferidos**
   - **Descripción**: Tras introducir la ciudad los usuarios podrán seleccionar uno o más cines mediante checkboxes para filtrar los resultados de la búsqueda.
   - **Entrada**: Checkboxes con nombres de cines disponibles.
   - **Salida**: Resultados filtrados que muestran solo las películas en los cines seleccionados de un ciudad.

#### 4. **Autocompletado para Ciudad**
   - **Descripción**: El sistema sugerirá ciudades a medida que el usuario escribe en los campos de búsqueda.
   - **Entrada**: Texto ingresado en los campos de búsqueda.
   - **Salida**: Lista de sugerencias relevantes basada en el texto ingresado.

#### 5. **Visualización de Resultados**
   - **Descripción**: Los resultados de la búsqueda se mostrarán de manera clara y ordenada, agrupando por películas y mostrando los distintos pases.
   - **Salida**: Lista de películas con detalles como título, sinopsis, horarios y cines donde se proyectan.
   - **Formato**: Cada película debe mostrar los horarios en los que se proyecta y los cines correspondientes.

#### 6. **Detalles del Cine**
   - **Descripción**: Al hacer clic en el nombre de un cine, se debe mostrar una lista detallada de las películas y horarios disponibles en ese cine.
   - **Entrada**: Click en el nombre del cine desde la lista de resultados.
   - **Salida**: Detalle de películas y horarios para el cine seleccionado.

#### 7. **Interfaz de Usuario Amigable**
   - **Descripción**: La interfaz debe ser intuitiva, fácil de usar y visualmente agradable.
   - **Elementos Clave**:
     - Campos de búsqueda con autocompletado.
     - Checkboxes para selección de cines.
     - Botón de búsqueda.
     - Visualización clara y organizada de resultados.

#### 8. **Actualización de Datos**
   - **Descripción**: El sistema debe actualizar regularmente la información de las carteleras para asegurar que los datos sean precisos.
   - **Método**: Utilizar scraping de sitios web de cines o APIs disponibles.

#### 9. **Gestión de Errores**
   - **Descripción**: El sistema debe manejar errores de manera adecuada, mostrando mensajes claros si la búsqueda no produce resultados o si hay problemas con la conexión.
   - **Mensajes de Error**:
     - "No se encontraron resultados para la búsqueda."
     - "Error al cargar la información. Por favor, inténtalo de nuevo más tarde."

#### 10. **Accesibilidad y Responsividad**
   - **Descripción**: La aplicación debe ser accesible desde diferentes dispositivos (ordenadores, tablets, móviles) y cumplir con los estándares de accesibilidad.
   - **Características**:
     - Diseño adaptable a diferentes tamaños de pantalla.
     - Texto legible y navegación intuitiva.

#### 11. **Seguridad y Privacidad**
   - **Descripción**: El sistema debe manejar los datos de los usuarios de manera segura y garantizar la privacidad.
   - **Consideraciones**:
     - Protección de datos personales (aunque no se recogen datos sensibles en este caso).
     - Manejo seguro de solicitudes y respuestas.

#### 12. **Performance**
   - **Descripción**: El sistema debe responder rápidamente a las búsquedas y mostrar los resultados sin demoras significativas.
   - **Requisitos**:
     - Tiempo de respuesta adecuado para búsquedas y carga de resultados.
