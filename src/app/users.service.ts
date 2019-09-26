import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';

import { User } from './models/user';
import {ApiModelUser, apiModelDefault} from './models/ApiUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  urlApi = 'http://34.244.243.6/users_jlr';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }


  constructor(private http: HttpClient  ) { }

  getUsers(): Observable<any> {
    return this.http.get(this.urlApi)
      .pipe(
        map(res => this.apiModelToAppModel(res)),
        tap(_=> console.log('fetched users')),
        catchError(this.handleError)
      )
  }

  addUser(user:User):Observable<User> {
    user = this.appModelToApiModel(user);
    return this.http.post<User>(this.urlApi, user, this.httpOptions)
      .pipe(
        tap(_=> console.log('added user')),
        catchError(this.handleError)
      )
  }

  editUser(user:User): Observable<User> {
    const url = `${this.urlApi}/${user.id}`
    return this.http.put<User>(url, user, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updated user id=${user.id}`)),
        catchError(this.handleError)
      )
  }

  removeUser(user:User): Observable<User> {
    const url = `${this.urlApi}/${user.id}`
    return this.http.delete<User>(url, this.httpOptions)
      .pipe(
        tap(_=> console.log(`deleted user id=${user.id}`)),
        catchError(this.handleError)
      )
  }

  private apiModelToAppModel(apiModel): User[] {
    return apiModel.map((a) => ({
        id: a.id,
        name: a.name,
        email: a.email,
        posts: 0
      }
    ))
  }

  private appModelToApiModel(appModel:User): ApiModelUser{
    const apiModel = apiModelDefault();
    return ({
      ...apiModel,
      id: appModel.id,
      name: appModel.name,
      email: appModel.email,
      posts: appModel.posts,
    })
  }



  private handleError(error: any) {
    console.error(error)
    return throwError(error);
  }
}


