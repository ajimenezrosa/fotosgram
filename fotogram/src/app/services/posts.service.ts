import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0; 

  constructor( private http: HttpClient) { }


  getPosts() {
    this.paginaPosts++;
     return this.http.get<Respuestaposts>(`${ URL }/post/?pagina=${this.paginaPosts}`);

  }



}
