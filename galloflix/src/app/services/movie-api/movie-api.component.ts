import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieApiComponent {

  constructor(private http: HttpClient) {}

}
