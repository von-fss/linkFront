import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../../models/filme';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FilmeService {

  url: string = 'http://127.0.0.1:8080/filmes';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.url).pipe(map(data => data.map((filmes) => new Filme(
          filmes.title,
          filmes.director,
          filmes.rating,
          filmes.releaseDate,
          filmes.description,
          filmes.photo
        ))
      )
    );
  }
  
}