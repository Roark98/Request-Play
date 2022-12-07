## Subida automática de imagen a DockerHub mediante Github Actions

Como primer paso, desde luego, es mandatorio contar con una cuenta en [DockerHub](https://hub.docker.com/), y crear un repositorio público donde albergar la imagen del proyecto. Una vez cumplido este requisito, procedemos con la confección de un *workflow* específico que aproveche los *webhooks* de Github Actions para la automatización del proceso de subida, el cual se puede consultar [aquí](https://github.com/Roark98/EcuaTourism/blob/main/.github/workflows/docker-upload.yml).

## Justificación del workflow

```
on:
  push:
    branches: [ main ]
```


<p align='center'>
<img src="../imgs/dockerhub.png" alt="docker-test" height="140" width=55% align='center'/>
</p>
