interface Respuestaposts {
  ok: boolean;
  pagina: number;
  posts: Post[];
}

interface Post {
  imgs?: string[];
  _id?: string;
  mensaje?: string;
  coords?: string;
  usuario?: Usuario;
  created?: string;
}

interface Usuario {
  avatar?: string;
  _id?: string;
  nombre?: string;
  email?: string;

}