import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()  todos;
  @Output() complete = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
