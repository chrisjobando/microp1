import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Micro-practica 1';

  private products:Array<[string, number]>=[['Arroz tres delicias', 3.50],
    ['Cerdo agridulce', 5.50], ['Ternera con bambu y setas', 7.00]];

  public productID = -1;
  public amount:number = 0.0;
  public lines:Array<[string, number]>=[];

  public addLine() {
    var product = this.products[this.productID][0];
    var price:number = this.products[this.productID][1];
    this.lines.push([product, price]);
    this.amount += price;
  }

  public delLine(i) {
    this.amount -= this.lines[i][1];
    this.lines.splice(i,1);
  }
}
