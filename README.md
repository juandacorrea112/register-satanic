# Login-register-dom

En el presente ejercicio realizaremos una simulación de un formulario de registro básico y sencillo.

Para ello tendremos en cuenta los siguientes elementos:

1. los input deberán ser validados en tiempo real teniendo en cuenta los requisitos a continuación:
* el nombre debe contener mínimo 3 caracteres y no puede contener números o caracteres alfanuméricos(Para efecttos del ejercicio, validar: * - + / $).
* El usuario no debe existir(debe estar disponible).
* La coincidencia entre los dos campos de password(Garantizar que el password no se vea, esto por medio de JS).

2. En el momento del Login, validar si el usuario no existe sugerirle que se registre, o si los datos son incorrectos mostrar alerta.

3. No deben haber campos vacíos.Todos los campos deben ser obligatorios.

--
Helpers:

+ Tener en cuenta el uso del event.preventDefault(), pues cada objeto del Dom tiene información de valor que nos puede ser útil.
+ Se pueden usar objetos u arreglos para guardar la información(Quién desee puede investigar y hacer uso de Local Storage para guardar los datos, pero este punto es opcional).

---
La base en maquetación puede ser adaptada a gusto del desarrollador. El diseño debe ser responsive.
Fecha de inicio: 03 de mayo de 2022.
Fecha de entrega: 06 de mayo de 2022 10:00 pm.
Entregar link del repositorio.