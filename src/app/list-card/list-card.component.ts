import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent {

  @Input() total_sales:string ="Total Sales";
  @Input() volume:string ="62,721m³";
  @Input() compression_state:string ="Compression State";
  @Input() valueOfcompression:string ="Compression";
  @Input() maxTransactionPerhour:string ="Max Transaction / hour";
  @Input() valueOftransaction:string ="20";
}
