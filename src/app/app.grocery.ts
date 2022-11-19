import { Component } from '@angular/core';

@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: [
        '../assets/bootstrap-5.2.2-dist/css/bootstrap.min.css'
    ]
})

export class GroceryComponent {
  task!: string;
  tasks: any[] = [];

  onClick(){
    this.tasks.push({name: this.task});
  this.task = '';
  }
}