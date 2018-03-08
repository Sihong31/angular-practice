import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'})
    // return this.http.post(
    //   'https://angular-practice-http.firebaseio.com/data.json',
    //   servers,
    //   { headers: headers}
    // );
    return this.http.put(
      'https://angular-practice-http.firebaseio.com/data.json',
      servers,
      { headers: headers}
    );
  }

  getServers() {
    //throw error without data.json
    // return this.http.get('https://angular-practice-http.firebaseio.com/data')
    return this.http.get('https://angular-practice-http.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          for(const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getAppName() {
    return this.http.get('https://angular-practice-http.firebaseio.com/appName.json')
    .map(
      (response: Response) => {
        return response.json();
      }
    );
  }

}
