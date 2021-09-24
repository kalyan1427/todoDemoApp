import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  task:string="";
  status:string="";

  todo =[
    {
      task: "Attend interview at 10AM",
      status: "done"
    },
    {
      task: "compleate the task",
      status: "inPorgrass"
    },
    {
      task: "stnd the task",
      status: "todo"
    },
    {
      task: "prepare food",
      status: "todo"
    }
  ];
  searchText;

  constructor(){

  }
  ngonChange(){
    this.todo=[...this.todo];
  }
 
  onSubmit(TodoForm:NgForm){
    console.log(TodoForm.value)
    this.todo.push(TodoForm.value);
    console.log(this.todo)
  }

}
