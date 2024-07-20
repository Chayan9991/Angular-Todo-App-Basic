import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../model/todo";
import {NgClass} from "@angular/common";
import {ApiService} from "../../services/api.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-todo-elements',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './todo-elements.component.html',
  styleUrl: './todo-elements.component.css'
})
export class TodoElementsComponent {
  @Input() todo: Todo = new Todo();
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private apiService: ApiService) {
  }

  deleteTodo(todoId:string){
      this.apiService.deleteTodo(todoId).subscribe({
        next:(data)=>{
           this.deleteEvent.emit(todoId)
          console.log(data)
        },
        error:(error)=>{
          console.log(error)
        },
        complete:()=>{

        }
      })
  }

  updateTodo(todoId:string){
    this.apiService.updateTodo(todoId, this.todo).subscribe({
      next: (updatedTodo) => {
        console.log("Todo Updated Successfully...", updatedTodo);
        alert("Todo Updated Successfully...");
      },
      error: (error) => {
        console.error("Error occurred while updating todo:", error);
      },
      complete: () => {
        console.log("Update operation complete.");
      }
    })
  }
}
