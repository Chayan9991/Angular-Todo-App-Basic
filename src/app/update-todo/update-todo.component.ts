import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Todo} from "../model/todo";
import {ApiService} from "../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-todo',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.css'
})
export class UpdateTodoComponent implements OnInit {
  todo: Todo = new Todo();

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.apiService.getTodo(id).subscribe({
        next:(data)=>{
          this.todo = data;
        }
      })
    }
  }

  updateTodo(event:SubmitEvent){
    this.apiService.updateTodo(this.todo.id, this.todo).subscribe({
      next: (updatedTodo) => {
        console.log('Todo Updated Successfully...', updatedTodo);
        this.router.navigate(['/view-todos']);
      },
      error: (error) => {
        console.error('Error occurred while updating todo:', error);
      },
      complete: () => {
        console.log('Update operation complete.');
      }
    });
  }

}
