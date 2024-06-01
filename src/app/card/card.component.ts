import { Component, ElementRef, Input, OnInit, ViewChild,Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements AfterViewInit {

  @Input() Numberr:string = "71,028";
  @Input() measure:string = "EGP";
  @Input() desc:string = "Total Value";
  @Input() unit_num:string = "2%";
  @Input() arrow_up_down:string = "";
  @Input() isActive:string = "";
  @ViewChild('arrow') arrow?:ElementRef;
  @ViewChild('card') card_isActive?:ElementRef;
  @ViewChild('up_down_color') up_down_color?:ElementRef;
  constructor(private renderer:Renderer2)
  {

  }


  ngAfterViewInit():void{
    if(this.isActive ==="active")
      {
        this.renderer.addClass(this.card_isActive?.nativeElement , 'active-card')
      }
     if(this.arrow_up_down === "up")
      {

      this.renderer.addClass(this.arrow?.nativeElement , 'arrow_up');
      this.renderer.addClass(this.up_down_color?.nativeElement , 'up_color');
      }
    else
    {
      this.renderer.addClass(this.arrow?.nativeElement , 'arrow_down');
      this.renderer.addClass(this.up_down_color?.nativeElement , 'down_color');
    }

  }
}
