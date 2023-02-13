# unicomerce


1. Iniciar API, en ruta (./api): 'npm start'. (La misma ya se encuentra deployada)
2. Iniciar FRONT, en ruta(./front): 'ng serve -o';


Funcionalidades:

1. Login
Se puede loguear solo con un usuario registrado en la base de datos.
El que se encuentra por defecto se puede ingresar o crear uno nuevo en el boton "¿No tienes cuenta? Registrate".
2. El grafico se realizo con la libreria de google charts, se puede ver en la ruta "http://localhost:4200/home".
3. Se utilizaron pipes de Angular para formatear los datos (moneda, fecha).
4. Todos los datos son consumidos de la base de datos.
5. Se implemento Guards para que no se pueda acceder a las ruta "http://localhost:4200/home" sin estar logueado.

Link al deploy bd: https://api-unicomerce.fly.dev/

#Link al deploy front: https://astonishing-starlight-a7aebc.netlify.app/

Contraseña de usuario: 123456

rutas de la api: 

https://api-unicomerce.fly.dev/api/login
<br>
https://api-unicomerce.fly.dev/api/balance
<br>
https://api-unicomerce.fly.dev/api/ultimas-transacciones
<br>
https://api-unicomerce.fly.dev/api/tarjetas
<br>
https://api-unicomerce.fly.dev/api/menu
<br>
https://api-unicomerce.fly.dev/api/cuotas


