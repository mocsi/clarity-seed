import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map"

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: Http) { }

  get (page = 1) {
    let url = `http://swapi.dev/api/people/?page=${page}`;
    return this.http.get(url).map(data => data.json());
  }
}
