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
    return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
  }
  //Filmes em Destaque do DIa
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?language=pt-br`, this.options);
  }
  //Series em Destaque do DIa
  trendingSerieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/tv/day?language=pt-br`, this.options);
  }
  //Filmes de ação popular
  popularActionMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=28&sort_by=popularity.desc`, this.options);
  }
  //Filmes de terror popular
  popularHorrorMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=27&sort_by=popularity.desc`, this.options);
  }
  // ---------------- Área de Detalhes
  // Buscar Detalhes da Midia
  mediaDetails(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}?language=pt-br`, this.options);
  }
  // Buscar os Trailers da Midia
  mediaTrailers(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}/videos?language=pt-br`, this.options);
  }
  // Buscar o Elenco da Midia
  mediaCast(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}/credits?language=pt-br`, this.options);
  }

  //Buscar os dados do Ator ou Atriz
  personDetails(value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/person/${value}?language=pt-br`, this.options);
  }
  
  // Pesquisa
  searchMedia(value: any, page: any = 1) : Observable<any> {
    return this.http.get(`${this.baseUrl}/search/multi?query=${value}&language=pt-br&include_adult=false&page=${page}`, this.options)
  }
}
