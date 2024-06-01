import { Component, ElementRef, ViewChild ,Renderer2, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-graph-list',
  templateUrl: './graph-list.component.html',
  styleUrl: './graph-list.component.css'
})
export class GraphListComponent {
  @Output() graphOrList = new EventEmitter<string>();
  @ViewChild('graph_list_select') graph_list_select?:ElementRef;
  @ViewChild('List_font_color') List_font_color?:ElementRef;
  @ViewChild('graph_font_color') graph_font_color?:ElementRef;

  sendGraphOrList(directionn:string) {
    this.graphOrList.emit(directionn);
  }
  constructor(private render:Renderer2)
  {

  }

  Graph_list_Select(direction:string)
  {
     if(direction === "right")
      {
        this.sendGraphOrList('right');
        this.render.removeClass(this.graph_list_select?.nativeElement , 'Graph_list_selector_left');
        this.render.addClass(this.graph_list_select?.nativeElement , 'Graph_list_selector_right');
        this.render.removeClass(this.graph_font_color?.nativeElement , 'font_white');
        this.render.addClass(this.List_font_color?.nativeElement , 'font_white');
      }
     else
      {
        this.sendGraphOrList('left');
        this.render.removeClass(this.graph_list_select?.nativeElement , 'Graph_list_selector_right');
        this.render.addClass(this.graph_list_select?.nativeElement , 'Graph_list_selector_left');
        this.render.removeClass(this.List_font_color?.nativeElement , 'font_white');
        this.render.addClass(this.graph_font_color?.nativeElement , 'font_white');
      }
  }
}
