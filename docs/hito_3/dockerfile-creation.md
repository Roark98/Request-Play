## Creación de fichero Dockerfile

En este documento se describe la elaboración del fichero Dockerfile. Dentro de este archivo se especifican las instrucciones a ejecutarse para la correcta construcción de la imagen deseada.

1. Se especifica la imagen base a partir de la cual construiremos la nuestra. Como ya se mencionó [aquí](https://github.com/Roark98/EcuaTourism/blob/main/docs/hito_3/docker-justification.md), se utiliza aquella basada en Alpine Linux con el entorno node pre-instalado.
```
FROM node:alpine
```
2. Procedemos a definir el directorio de trabajo sobre el cual contendremos el contenido de nuestro proyecto.
```
WORKDIR /app
```
3. Procedemos a copiar los ficheros `package.json` y `package-lock.json` dentro de la ruta definida dentro de nuestro entorno Docker. 
```
COPY ./api/package*.json ./
```
4. Una vez teniendo a nuestra disposición los ficheros mencionados en el punto anterior, procedemos a instalar las dependencias a través de `npm`.
```
RUN npm install
```
5. Ya teniendo las dependencias del proyecto, continuamos copiando el resto del contenido local al entorno Docker.
```
COPY ./api/ .
```
6. Finalmente, para cumplir por lo dispuesto por el respectivo hito, ejecutamos los tests mediante nuestros task manager.
```
CMD ["npm", "run", "test"]
```

## Instanciación y ejecución del contenedor Docker

Ahora que contamos con nuestro Dockerfile, podemos pasar a generar nuestra imagen Docker. Para este proceso, utilizamos el siguiente comando:
```
docker build -t ecuatourism .
```
Mediante la bandera `-t` especificamos el nombre de la imagen resultante, el cual corresponde con el nombre de este repositorio. Finalmente, como último argumento de este comando se especifica la ruta donde se encuentra el fichero Dockerfile.

Ahora, procedemos a instanciar y ejecutar un contenedor a partir de la imagen previamente generada:
```
docker run -t -v `pwd`:/app/test ecuatourism
```
Se destaca el uso de la bandera `-t` para llevar a cabo una ejecución en modo TTY, y `-v` para el montaje de un volumen en el contenedor. En este caso, se monta el directorio actual en el directorio `/app/test` del contenedor, donde se encuentra el código de mi aplicación.

<p align='center'>
<img src="../imgs/docker-test.png" alt="docker-test" height="320" width=45% align='center'/>
</p>

Una vez ejecutado el contenedor, podemos observar que los tests tanto unitarios como a nivel de endpoints siguen siendo superados tal y como se esperaba.
