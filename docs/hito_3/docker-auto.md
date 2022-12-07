## Subida automática de imagen a DockerHub mediante Github Actions

Como primer paso, desde luego, es mandatorio contar con una cuenta en [DockerHub](https://hub.docker.com/), y crear un repositorio público donde albergar la imagen del proyecto. Una vez cumplido este requisito, procedemos con la confección de un *workflow* específico que aproveche los *webhooks* de Github Actions para la automatización del proceso de subida, el cual se puede consultar [aquí](https://github.com/Roark98/EcuaTourism/blob/main/.github/workflows/docker-upload.yml).

Este fichero se basó en el propio ejemplo recomendado en la [documentación](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images) de Github, únicamente aplicando las configuraciones necesarias para ser adaptadas a nuestro caso particular.

Entre las consideraciones que fueron tomadas en consideración dentro del fichero, encontramos:

* De manera preliminar, la respectiva acción unicamente tendrá lugar cuando se reciba un push que afecte a la rama principal del repositorio. Este aspecto en un futuro cercano será reformado con el fin de evitar una ejecución excesivamente repetitiva de la acción.

```
on:
  push:
    branches: [ main ]
```

* Se define un paso correspondiente a la autenticación y acceso a la cuenta de DockerHub. Para que esto sea posible, se hace uso de variables de entorno encriptadas ofrecidas por Github, las cuales se conocen como *secrets*. Se definen dos de estas variables, siendo una dirigida a albergar el nombre de usuario de la cuenta de DockerHub, y otra para la contraseña.

```
name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
```

<p align='center'>
<img src="../imgs/secrets.png" alt="docker-test" height="140" width=65% align='center'/>
</p>

* 

<p align='center'>
<img src="../imgs/action-upload.png" alt="docker-test" height="140" width=65% align='center'/>
</p>

<p align='center'>
<img src="../imgs/dockerhub.png" alt="docker-test" height="140" width=65% align='center'/>
</p>

## Publicación automática de imagen Docker en Github Container Registry

Github Container Registry es un servicio de Github que permite almacenar imágenes de contenedores dentro de nuestra cuenta en esta plataforma, además de permitir asociarl una imagen con un repositorio. Adicionalmente, también permite acceder a imágenes de contenedores públicos de forma anónima. Ciertamente este servicio es considerablemente similar a DockerHub, pero con algunos beneficios adicionales.
* Permite enlazar directamente una imagen a un repositorio, por lo que permite ofrecer directamente toda la documentación de la misma.
* Ofrece mayor libertad al momento de definir la visibilidad que tendrá nuestra imagen.
* Se habilitan distintas funcionalidades para restringir el uso de una imagen tanto dirigido para repositorios como para usuarios (muy útil para restringir usos cuando se desarrolla para una organización cerrada).

Por estos motivos, pese a que no se desea despreciar a una plataforma tan utilizada como DockerHub, Github Container Registry representa una herramienta especialmente útil cuando se piensa a nivel de empresa.

Con el fin de poder publicar nuestra imagen de forma automática a este servicio, se ha optado por nuevamente apoyarnos en un *workflow* de Github Actions que, por el momento, subirá nuestra imagen después de cada commit que se registre en nuestro repositorio de Github.

La estructura de este [fichero](https://github.com/Roark98/EcuaTourism/blob/main/.github/workflows/docker-registry.yml) replica en su mayoría al utilizado para la publicación automática en DockerHub. Principalmente, estos dos *workflows* difieren en los pasos de login y subida.

Por obvias razones, en 

```
name: Login to GitHub Container Registry
        uses: docker/login-action@v1
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
```

```
name: Build and push GitHub Container Registry image
        uses: docker/build-push-action@v2
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
```
