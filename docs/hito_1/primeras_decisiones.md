## Lenguaje de Programación
Se ha decidido desarrollar el proyecto utilizando Javascript, junto a NodeJS como entorno de ejecución. A su vez se utilizarán los siguientes módulos/framworks obtenidos mediante el gestor de paquetes NPM:
* Express
* Nodemon
* pg

## Clases definidas de manera preliminar
1. :round_pushpin: Clase Lugar
    * **ID**: Identificador único asignado a cada lugar turístico disponible en el sistema.
    * **Nombre del lugar**: Nombra formal y/o coloquial con el que se conoce al sitio turístico.
    * **Tipo**: Género o naturaleza del lugar. (Posibles valores: Histórico/Natural/Nocturno/Costero).
    * **Costo de visita**: Valor monetario expresado en dólares americanos requeridos para acceder a dicho sitio.
    * **Ciudad**: Ciudad donde se sitúa el punto turístico.
    * **Región**: Región del Ecuador donde se encuentra el destino seleccionado. (Posibles valores: Costa/Sierra/Oriente/Galápagos).
    * **Descripción**: Contenido escrito que abarque datos, historia, y costumbres ecuatorianas relacionadas con la locación asociada.
    * **Contador de visitas**: Número de visitas registradas por dicho sitio turístico.
    * **Contador de reseñas**: Número de reseñas recibidas por dicho sitio turístico.
    * **Valoración general**: Valoración promedio recibida por parte de los usuarios que han calificado dicho lugar.
3. :godmode: Clase Persona
    * **ID**: Identificador único asignado a cada usuario registrado en la plataforma.
    * **Usuario**: Nombre del usuario registrado.
    * **Correo**: Correo electrónico del usuario.
    * **Contraseña**: Clave de autenticación definida por el usuario para acceder al sistema.
    * **Rol**: Rol del usuario (Admin o visitante).
    * **IDs de lugares favoritos**: Listado de IDs de lugares turísticos que el usuario haya incluído entre sus favoritos.
