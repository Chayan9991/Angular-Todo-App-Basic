import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AddTodoComponent} from "./components/add-todo/add-todo.component";
import {ViewTodosComponent} from "./components/view-todos/view-todos.component";
import {UpdateTodoComponent} from "./update-todo/update-todo.component";



export const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
    title: "Home - Todo Manager"
  },
  {
    path:"add-todo",
    component:AddTodoComponent,
    title: "Add - Todo Manager"
  },
  {
    path:"view-todos",
    component:ViewTodosComponent,
    title: "View - Todo Manager"
  },
  {
    path:"update-todo/:id",
    component:UpdateTodoComponent,
    title: "Update - Todo Manager"
  }

];
