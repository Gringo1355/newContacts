import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import User from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>("/api/getAllUsers");
  }

  createUser(body):Observable<User>{
    return this.httpClient.post<User>("/api/addUser", body);
  }

  getUserById(id: number):Observable<User>{
    return this.httpClient.get<User>("api/getUser/" + id);
  }

  deleteUserById(id: number){
    return this.httpClient.delete<User>("api/deleteUser/" + id);
  }
}
