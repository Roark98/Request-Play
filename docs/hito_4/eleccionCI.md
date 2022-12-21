## Elección de sistema de integración continua (CI)

Como es de costumbre, antes de tomar una decisión referente a este proyecto, deberemos contrastar los beneficios y desventajas de utilizar una u otra alternativa para esta función.

<hr/>

### [Travis](https://www.travis-ci.com/)

Es una de las pioneras dentro de este campo. Es una de las opciones más populares a día de hoy y permite al usuario vincular su repositorio de GitHub o Bitbucket para compilar y probar sus aplicaciones apoyándose en la nube. Destaca de sobremanera su facilidad de configuración, ya que se requieren muy pocas lineas para llevar a cabo tareas de testing.

Por contraparte, más allá de tener un rendimiento ligeramente bajo, el mayor limitante al momento de decantarse por Travis es que recientemente ha pasado a ser de pago, sin ofrecer planeas especiales para educadores o estudiantes.

### [CircleCI](https://circleci.com/)

Compensando al enorme punto negativo de Travis, CircleCI ofrece una opción gratuita basada en minutos disponibles mensuales para el usuario. Gracias a esto, proyectos pequeños o educativos pueden salir adelante siempre teniendo la posibilidad de ir más allá en cuanto existan los fondos y vistas de crecimiento. Permite las mismas funciones que Travis para realizar testing en la nube, junto con una gran integración con Github, la cual podemos gestionar a través de un fichero `config.yml`, permitiendo incluso lanzar automáticamente los tests cuando realicemos algun push dentro de nuestro repositorio.


### [Jenkins](https://www.jenkins.io/)

Pese a no ser una herramienta para nada despreciable, Jenkins requiere la instalación de un programa de software adicional para poder llevar a cabo nuestro proceso de testeo. Su grandes requerimientos tanto solo de instalación, y más aún de configuración lo ponen en el último lugar de esta breve lista.

## Conclusiones

Debido a que se busca desarrollar un proyecto considerablemente pequeño, sin presupuesto disponible ni a corto ni a largo plazo, se decide optar por CircleCI como herramienta de integración continua. Adicionalmente, a lo largo de este trabajo se busca reducir al máximo los requerimientos computacionales y de espacio, por lo que al poderse incluso gestionar desde el navegador, ciertamente CircleCI se ajusta perfectamente a nuestras necesidades y pretenciones.
