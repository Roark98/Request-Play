# Hito 2

## Gestor de tareas

## Testing framework

Para este apartado, se contaban principalmente con 2 grandes contendientes: Mocha y Jest. 

<p align='center'>
<img src="../imgs/JESTvsMOCHA.png" alt="github_profile" height="200" width=50% align='center'/>
</p>

Con el fin de tomar decidir cuál usar, un buen criterio a tomar en cuenta es, sin duda, la popularidad de estas herramientas a lo largo del tiempo. Tomando en consideración el número de descargas en los últimos 5 años, se puede percibir claramente la imparable superioridad de Jest por encima de su rival. Esto, desde luego, significa también que más empresas en general están adoptando Jest como su framework de testeo, por lo que el decantarnos por esta alternativa nos permitiría asemejarnos mucho más al entorno laboral actual.

Basándonos ahora en lo que ambos marcos ofrecen, podemos observar que Mocha debe ser obligatoriamente acompañado por una biblioteca de aserciones (algo que incluso este hito toma en consideración). Para esto, la práctica más común es acompañarlo con la biblioteca de aserciones Chai. Si bien, esto no tiene nada de malo, suele ser valorable el requerir el menor número de dependencias posibles, por lo que, dado que Jest ya incorpora un sistema de aserciones, no requerimos un módulo adicional de esta naturaleza.

Adicionalmente, Jest nos permite generar un reporta referente a la cobertura del código (code coverage ratio) registrado durante el testing. Esto se consigue únicamente empleando el flag --coverage de Jest, mientra que en el caso de Mocha, esto es posible de obtener, pero nuevamente haciendo uso de una biblioteca adicional.

Por estas razones, y con el fin de no elevar considerablemente la complejidad del proyecto, se ha decidido optar por Jest como marco de pruebas.

## Biblioteca de aserciones

Como ya se dijo en el apartado anterior, el rol de biblioteca de aserciones será tomado también por Jest, al éste ya contar con sistema de aserciones incorporadas bastadas en 'expect()'
