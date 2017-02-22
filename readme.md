#Script para convertir las plantillas de correo estándar
#de la herramienta de formularios de la UA en tablas
#correctamente tabuladas que se pueden enviar por correo electrónico
#El CSS debe estar, por tanto, integrado en el propio HTML y ser lo
#bastantes sencillo como para que lo acepte cualquier cliente de correo

#Genera una tabla de dos columnas (30/70)
#Los títulos de sección abarcan las dos columnas y van en negrita
#Los campos de texto se dividen en Título / respuesta
#Los selectores están aún por determinar

#Sample.html es un formulario sencillo de prueba
#sample.html.parse es la trasnformación esperada

#Precisa el motor de Rhino de javascript
#https://developer.mozilla.org/docs/Mozilla/Projects/Rhino
$sudo apt install rhino

#Edit replace-script.js to add your own patterns and substitution strings
#You can use http://regexr.com/ to test patters before

#para ejecutar y mostrar por pantalla:
$rhino replace-script.sh [archivo-para-transformar]

#para ejecutar y redirigir a un archivo
$rhino replace-script.sh [archivo-para-transformar] > [archivo_salida]
