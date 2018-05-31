import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodosComponent} from './todos/todos.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoComponent} from './todo/todo.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
