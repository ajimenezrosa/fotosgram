
# Esta aplicación es real, pensada para que se mire bien y elegante. 
 ![fotoGram](https://www.panamaamerica.com.pa/sites/default/files/imagenes/2016/04/10/041016-PA-99-1-01.jpg)
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




# Interfaces necesarias para le tipado de nuestros Datos.

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


# Componente Post Posts y Componets Module.123

Anexamos el contenido de nuestro tabs.ion-logo-html

~~~html
<ion-tabs>

  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="home"></ion-icon>
    </ion-tab-button>

    <ion-tab-button tab="tab2">
      <ion-icon name="add-circle-outline"></ion-icon>
    </ion-tab-button>

    <ion-tab-button tab="tab3">
      <ion-icon name="person"></ion-icon>
    </ion-tab-button>
  </ion-tab-bar>

</ion-tabs>

~~~



# Backend -CORS Resolver el problema de peticiones CROSS Domain

# Interfaces necesarias para el tipodo de nuestros Datos.

