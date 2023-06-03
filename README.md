# Módulo 8 - Laboratorio 8.1. Bucles

> Aquí describimos la realización del laboratorio

Estamos desarrollando un software hospitalario, y el cliente nos pide poder realizar una serie se operaciones sobre una lista de pacientes.

Se nos proporciona el set de datos inicial.

## Apartados obligatorios

### Apartado 1

Extraer lista de pacientes que están asignados a la especialidad de Pediatría y la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
Lo implementamos con un bucle _for_ que itera la lista de pacientes quedándose con aquellos que interesan según el criterio de elección, condicionales y el método _push_.
En el subapartado con letra b sólo añadimos la nueva condición a la condición.
Entendemos que los métodos trabajan de forma inmutable con el interfaz y la lista original de pacientes al crear nuevos _arrays_.

### Apartado 2

Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
Crear una función que devuelve true/false dependiendo si se da la condición.
Lo implementamos con un bucle _for_ que itera la lista de pacientes y si se cumplen las condiciones de ritmo cardíaco y temperatura corporal, `activarProtocolo` pasa a ser `true` y rompemos el bucle con un `break`. Caso contrario, la función sigue su "curso normal" y devuelve `false`.

### Apartado 3

El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
Iteramos con un bucle _for_ la lista de pacientes y si el paciente está asignado a pediatría, sobreescribimos que su especialidad es la del médico de familia. Devolvemos la lista de pacientes actualizada con los pacientes reasignados.

### Apartado 4

Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría.
El mecanismo de funcionamiento de esta función es prácticamente idéntico a la del apartado 2.

## Apartados opcionales

### Apartado 5

Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología.
Creamos el objeto vacío del tipo _NumeroPacientesPorEspecialidad_. Creamos variables de número de pacientes que inicializamos a 0. Iteramos la lista de pacientes con un bucle _for_ y con condicionales prevemos los supuestos: si el paciente es de la especialidad específica, se suma 1 a la variable de número de pacientes correspondiente y se actualiza el valor en la propiedad del objeto.

> Fin del laboratorio
