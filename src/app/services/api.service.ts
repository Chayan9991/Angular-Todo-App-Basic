import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://localhost:8080/api/todos"
  constructor(private httpService: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    return this.httpService.post<Todo>(`${this.baseUrl}/add-todo`, todo);
  }

  getAllTodos(){
    return this.httpService.get<Todo[]>(`${this.baseUrl}`)
  }

  deleteTodo(todoId:string){
     return this.httpService.delete<Todo>(`${this.baseUrl}/delete-todo/${todoId}`);
  }

  updateTodo(todoId:string, todo:Todo){
    return this.httpService.put<Todo>(`${this.baseUrl}/update-todo/${todoId}`, todo)
  }

  getTodo(todoId:string){
    return this.httpService.get<Todo>(`${this.baseUrl}/${todoId}`)
  }
}
