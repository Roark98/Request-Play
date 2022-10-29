# :lock: Segundo Factor de Autenticación :lock:

Como medida adicional de seguridad, se decidió activar el sistema de autenticación de dos pasos ofrecido por la plataforma de Github. Para esto, se dene acceder a `Settings > Password and Authentication > Two-factor authentication`.

<p align='center'>
<img src="../imgs/two_factor_auth.png" alt="two-factor" height="260" width=60% align='center'/>
</p>

Una vez se active este sistema de autenticación adicional, para que éste inicie su función pedirá que se lleve a cabo ya sea mediante una app movil, o a través de verificación mediante mensaje SMS. 

<p align='center'>
<img src="../imgs/conf_two_factor.png" alt="conf-two-factor" height="400" width=45% align='center'/>
</p>

Para este proyecto, se decidió optar por el segundo método mencionado. De esta manera, a continuación la plataforma solicita el número de teléfono junto con la extensión del país correspondiente. Posterior al ingreso del código de verificación enviado por Github, el proceso de autenticación en dos pasos se encontrará activado.
