import {Component} from '@angular/core';
import {Todo} from "../../model/todo";
import {FormsModule} from "@angular/forms";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  constructor(private apiService: ApiService) {
  }
  todo: Todo = new Todo();
  formSubmit = (event : SubmitEvent) => {
     event.preventDefault();
     console.log(event);
     console.log(this.todo);
     this.apiService.addTodo(this.todo).subscribe({
       next: (data) =>{
         console.log(data);
         this.todo = new Todo();
         alert("Todo Added...");
       },
       error: (error)=>{
         console.log(error);
       },
       complete: ()=>{
         console.log("Completed...");
       }
     });
  }
}
