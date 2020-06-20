Arquitectura de un backend complejo

- Inicialmente cuando el cliente hace una peticion, el server debera contar con un servicio que se encarga de recibir todas las peticiones y luego trabajarlas con otros servicios. Esto puede ser publico

- Adicionalmente hay servicios privados, que son recursos protegidos

- Se deben tener dependencia en los servicios, para que por ejemplo, si se quisiera cambiar el manejador de base de datos, este pueda hacerse sin tener que hacer modificaciones que ameriten cambios fuera de lo necesario.


Estructura inicial

- En api/index.js se define el setup del servidor, ahi mismo se definen las rutas. Sin embargo, el funcionamiento de cada ruta esta definido aparte en los networks de cada componente de api/components.

- En el network/response.js, se define las respuestas a las peticiones http. De esta forma se tienen respuestas unificadas para toda la aplicacion.


BodyParser

- Para poder obtener el body de un request, se necesita usar la libreria body-parser junto a express:

    const bodyParser = require(bodyParser);
    app.use(bodyParser.json())


Documentacion de la api con Swagger

- Se debe crear un archivo swagger.json y luego utilizarlo para inicializar una ruta del api con la documentacion: 

    const swaggerUi = require('swagger-ui-express');
    const swaggerDoc = require('./swagger.json');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


JWT: Gestión de acceso
- El token esta conformado por tres partes:

    * Cabecera: Especifica el tipo de algoritmo de cifrado y el tipo de token
    * Payload: Es la data que se utilizara. Contiene ciertas propiedades como el sub que es un identificador unico del usuario al que se le asigno en el token (subscriber)
    * Firm: Contiene informacion del token y es donde se hashea con un secret

- Para firmar un token se usa el metodo sign :
    function sign(data) {
        return jwt.sign(data, secret);
    }

- Para validar y decodificar un JWT se puede usar el metodo verify:
    //Retorna la informacion decodificada
    function verifyToken(token) {
        return jwt.verify(token, secret)
    }

Autenticación: registro
- Es una buena practica que el password no forme parte de la entidad del usuario, para que no se tenga que tener controles extras al momento de enviar la respuesta relacionada a un usuario.


Encriptar password
- Para encriptar cualquier tipo de informacion, se puede usar bcrypt.hash(dataString, saltRounds).


Validacion de errores:

- Es posible manejar los errores de manera unificada, creando un middleware que se asigna luego de todas las rutas en el index del api:

    app.use(errors);
