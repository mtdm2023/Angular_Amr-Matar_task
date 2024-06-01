import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-user-dashboard';
  displayTemplate1_List: boolean = true;

  receiveDirection(direction:string)
  {
     if(direction === "right")
       this.displayTemplate1_List = true;
     else
       this.displayTemplate1_List = false;
  }



}
