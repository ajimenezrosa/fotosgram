
# Esta aplicación es real, pensada para que se mire bien y elegante. 
 
## Implementaremos guards pensados en que todo es cargado mediante lazyload y protección de las rutas contra servicios en nuestro backend.


debemos navegar a nuestra carpeta de Backend 
y ejecutar tsc , esto para que cree la carpeta dist/ que es donde se encuentra nuestro proyecto de Nodejs

En la carpeta del proyecto ejecutamos lo siguiente

~~~javascript
  node dist/
~~~






# Optener el listado de Nuestros Posts

# Artículo - Crear 21 registros en la base de datos
***Nota:***
Vamos a necesitar 21 registros en la base de datos para probar la paginación y el infinitescroll, por lo cual les pediré que vuelvan a revisar la clase:

***209 - Servicio para obtener los POSTs de forma paginada***




# Interfaces necesarias para le tipado de nuestros Datos.123

  A continuacion presentamos el tipado de nuestros datos.
  esta estructura esta datos por los datos de nuestro servicio que lista nuestros posts.


~~~javascript
interface Respuestaposts {
  ok: boolean;
  pagina: number;
  posts: Post[];
}

interface Post {
  imgs: string[];
  _id: string;
  mensaje: string;
  coords: string;
  usuario: Usuario;
  created: string;
}

interface Usuario {
  avatar: string;
  _id: string;
  nombre: string;
  email: string;
}
~~~




# Backend -CORS Resolver el problema de peticiones CROSS Domain

# Interfaces necesarias para el tipodo de nuestros Datos.

