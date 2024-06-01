import { Component,ElementRef,Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upper-panner',

  templateUrl: './upper-panner.component.html',
  styleUrl: './upper-panner.component.css'
})
export class UpperPannerComponent {
  constructor(private renderer:Renderer2)
  {

  }

  @ViewChild('Today') Today?:ElementRef;
  selected_day(day:string){

  }

}
