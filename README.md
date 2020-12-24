# Bank Dreams 
`v` `1.0.0`

# Test Backend Node Js 

Api en desarrollada bajo el paradigma funcional encargada en el login y consulta de las transacciones de una cuenta

## Starting :rocket:

Estas instrucciones le permitirán obtener una copia del proyecto en ejecución en su máquina local para propósitos de desarrollo y prueba.

### Pre Requisitos 📋

Estas son las necesidades del proyecto en resumen, 
para más información puedes revisar la documentación oficial del Framework, aquí se trata de resumir todo.

1. Node y Npm (Node dependency manager)
2. Docker y docker compose (opcional)
3. PosgreSql 

### Importante.
Esta aplicación se conecta a una base de datos posgres
## Backend Server

Este backend establece una conexión a una base de datos Atlas de MongoDb. 
Puede modificar y agregar el [`docker-compose.yml`](docker-compose.yml) to add a MongoDb image.

>signin

-   [`auth/singin`](#entry)


>getMyProducts

-   [`users/get-my-accounts`](#entry)




### `documentation Api`
* [Doc](https://github.com/CristianPip3/full-stack-developer-test/blob/cristian-felipe-benavides/Test-Full-Stack-Hugo-App.postman_collection.json)

### Instalación :fire:


Siguientes pasos para cada directorio y ejecute en cada servicio

_1- Clone el projecto o descarguelo en formato ZIP_

_2- Ejecute el siguiente comando en  console (Previously installed)_

_3- Despues de verificar todos los prerequisitos \*\*_ Prerequisites _\*\*.
Abra una segunda terminal y escriba_

``
$ pwd
/home/linuxp/
``

_4- En una terminal ejecute el siguiente comando:_

``
$ npm install
``

_5- Agregue las siguientes variables de entorno 


>NODE_ENV=development

>APP_VERSION=1

>API_SWAGGER=/api-docs

>DB_HOSTNAME=

>DB_NAME=

>DB_USERNAME=

>DB_PASSWORD=

>DB_PORT=5432

>DB_NAME_TEST=

>PORT=

>TIMEZONE='UTC'

>SECRET=




_Despues de terminar la instalación usted puede ejecutar el siguiente comando_

`$ npm start`

-   [Node v12.16.0](https://nodejs.org/en/) - The web framework used
-   [Npm 6.13.7](https://www.npmjs.com/) - Dependency handler
-   [Rest Client](https://www.getpostman.com/) - Used to make Rest requests
-

    ## Autor :sunglasses:

-   **Cristian Felipe Benavides** - _Developer_ - [CristianPip3](https://github.com/CristianPip3)

Screen de modelo de datos y modelo de secuencia 
Modelo de datos 
![ScrennShot](https://github.com/CristianPip3/api-bank-dreams/blob/master/Screenshot_20201224_093613.png)

