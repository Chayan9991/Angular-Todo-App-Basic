import {Component, OnInit} from '@angular/core';
import {TodoElementsComponent} from "../todo-elements/todo-elements.component";
import {ApiService} from "../../services/api.service";
import {Todo} from "../../model/todo";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-view-todos',
  standalone: true,
  imports: [
    TodoElementsComponent,
    NgForOf
  ],
  templateUrl: './view-todos.component.html',
  styleUrl: './view-todos.component.css'
})
export class ViewTodosComponent implements OnInit{
  todos: Todo[] = [];
  constructor(private apiService: ApiService) {
  }
  ngOnInit(): void {
    this.apiService.getAllTodos().subscribe({
      next: (data)=>{
       console.log(data);
       this.todos = data;
      }, error:(error)=>{
       console.log(error);
      }, complete:()=>{
       console.log("All Todo List Fetched Successfully...")
      }
    })
  }

  deleteEventFromChild(todoId:string){
    alert("todo deleted"+todoId)
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }
}
