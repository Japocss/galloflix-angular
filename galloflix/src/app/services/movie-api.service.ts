import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.themoviedb.org/3';
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzY3MDA4ZDU0ZGQ2MGU4ZTk2ZjEwNzI3MWVkMTQwNSIsIm5iZiI6MTc0NzA5OTg1My45NTIsInN1YiI6IjY4MjJhMGNkNmU1YmI0ZTEzMDRiNDcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AfaxNqxGdVRYjPI4lgBxWnIhW2ZpTHZteqS6lZys2gA'
    }
  };

  //Dados para o banner - Midias em destaque da semana
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week/?language=pt-br`, this.options);
  }
}
