import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  label: string;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.label) {
      return;
    }
    this.add.emit({label: this.label});
    this.label = '';
  }

}
