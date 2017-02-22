# UAFormsConverter
Script para convertir las plantillas de correo estándar de la herramienta de
formularios de la UA en tablas correctamente tabuladas que se pueden enviar
por correo electrónico. El CSS debe estar, por tanto, integrado en el propio
HTML y ser lo bastante sencillo como para que lo acepte cualquier cliente
de correo

* Genera una tabla de dos columnas (30/70)
* Los títulos de sección abarcan las dos columnas y van en negrita
* Los campos de texto se dividen en Título / respuesta
* Los selectores están aún por determinar

## Descripción de los ficheros
* __replace-script.js__ es en archivo javascript donde se configuran los patrones y cadenas de sustitución y que ejecuta que se ejecuta para lograrla (hay intención de migrar la configuración a un fichero externo)
* __sample.html__ es un formulario sencillo de prueba generado por la herramienta de cuestionarios
* __sample.html.parse__ es la transformación esperada

## Instalación y uso
1. Instalar el motor de Rhino de javascript https://developer.mozilla.org/docs/Mozilla/Projects/Rhino
2. Editar replace-script.js para configurar tus patrones de búsqueda y cadenas de sustitucion. Puedes usar http://regexr.com/ para probar ambos.
3. Para ejecutar y mostrar por pantalla:

  `$rhino replace-script.sh [archivo-para-transformar]`

4. Para ejecutar y redirigir a un archivo

   `$rhino replace-script.sh [archivo-para-transformar] > [archivo_salida]`
