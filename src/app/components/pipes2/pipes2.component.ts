import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes2',
  templateUrl: './pipes2.component.html',
  styleUrls: ['./pipes2.component.css']
})
export class Pipes2Component {
  saldo!: number
  moneda!: string
  Dolar   = (this.saldo * 3);
  EUR!: number

  parseD!: string


}
