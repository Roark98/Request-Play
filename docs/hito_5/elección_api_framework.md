## Elección de framework para elaboración de REST API

### ExpressJS
<hr/>
Express.js es un framework de Node.js para desarrollar aplicaciones web y servidores. Es uno de los frameworks más populares y utilizados en Node.js, y es muy fácil de aprender y utilizar.
Una de las principales ventajas de Express.js es su simplicidad y facilidad de uso. Tiene una sintaxis simple y una estructura de directorios bien definida, lo que permite a los desarrolladores crear aplicaciones web con un código limpio y fácil de entender.
Express.js también proporciona una gran cantidad de funciones útiles para el desarrollo web, como el manejo de rutas y la integración con middlewares. El manejo de rutas permite a los desarrolladores crear diferentes rutas para diferentes acciones en una aplicación web, mientras que la integración con middlewares permite a los desarrolladores crear funciones personalizadas que se ejecutan en cada solicitud.
Además, Express.js es altamente escalable, lo que lo hace adecuado para aplicaciones grandes y complejas. Es fácil de extender y adaptar a las necesidades específicas de una aplicación.
Sin embargo, hay algunas desventajas con Express.js. Una de ellas es que no proporciona una estructura de aplicación sólida, lo que puede dificultar el mantenimiento de aplicaciones grandes. La falta de una estructura de control de vistas también puede dificultar la creación de aplicaciones complejas, y la falta de una estructura de control de errores puede dificultar la depuración de problemas en aplicaciones complejas.


### NestJS
<hr/>
NestJS se inspira en Angular y proporciona una estructura de aplicación sólida y una arquitectura modular, lo que facilita el mantenimiento y escalabilidad de las aplicaciones.
El framework proporciona una estructura de controladores, servicios, pipes y middlewares, que ayudan a organizar y mantener el código de una aplicación. Además, NestJS utiliza un patrón de arquitectura similar al de Angular, conocido como arquitectura basada en modulos, lo que permite a los desarrolladores crear aplicaciones escalables y modulares.
Otra ventaja de NestJS es su facilidad de integración con otras librerías y tecnologías. El framework proporciona una variedad de decoradores y herramientas para facilitar la integración con otras tecnologías como GraphQL, MongoDB, y TypeScript. También ofrece un sistema de pruebas automatizadas integrado, lo que facilita la verificación del correcto funcionamiento de las aplicaciones.
Además, NestJS proporciona una estructura de control de vistas, lo que facilita la creación de aplicaciones complejas con una interfaz de usuario. También ofrece una estructura de control de errores, lo que facilita la depuración de problemas en aplicaciones complejas.


### Fastify
<hr/>
Fastify es conocido por su alto rendimiento y una arquitectura ligera, lo que lo hace ideal para aplicaciones con alta carga.
Una de las principales ventajas de Fastify es su alto rendimiento. El framework utiliza una arquitectura ligera que se enfoca en la minimización de la sobrecarga y la maximización de la velocidad, lo que permite a las aplicaciones desarrolladas con Fastify manejar una gran cantidad de solicitudes de manera rápida y eficiente.
Otra ventaja es que Fastify es fácil de aprender y utilizar, ya que tiene una sintaxis simple y una estructura de directorios bien definida. Además, Fastify proporciona una gran cantidad de funciones útiles para el desarrollo web, como el manejo de rutas y la integración con middlewares.
Fastify también es altamente escalable, lo que lo hace adecuado para aplicaciones grandes y complejas. Es fácil de extender y adaptar a las necesidades específicas de una aplicación.
Además, es compatible con TypeScript, lo que facilita la escritura de código con una mayor seguridad y ayuda en el proceso de mantenimiento.

## Conclusión y elección final
Teniendo en consideración que ExpressJS es un framework minimalista, popular y muy utilizado para aplicaciones web simples y pequeñas nos terminamos por decantar por esta opción debido al tamaño final que tendrá el proyecto, además de que al contar con experiencia previa en dicho framework acelerará considerablemente el desarrollo de la API.
Eso si, en caso de requerir llevar a cabo proyectos de gran tamaño, NestJS seguramente sería la mejor elección, y Fastify en caso de requerir priorizar la velocidad y rendimiento por encima de muchos otros factores.
