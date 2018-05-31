import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() item;
  @Output() change = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
