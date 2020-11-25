import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import test from "src/assets/test.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'receipt'
  url = 'https://northwind.now.sh/api/categories';
  receipt = [];
  salesOrder = [];
  finalTest = test[0];

  total : number = 0.00;
  totalTax : number = 0.00;

  constructor(private http: HttpClient) { 
    this.http.get(this.url).toPromise().then(data => {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          this.receipt.push(data[key]);
        }
      }
    });

    console.log(this.receipt);
    
    this.getTotalTax();
   }

  ngOnInit() {      
    /*setTimeout(() => {
      window.print();
      console.log('Ya se termino de cargar');
    }, 4000);*/
  }

  getTotalTax() {
    let Tax : number = 0.00;
    for (let key in this.finalTest.SalesOrder) {
      if(this.finalTest.SalesOrder.hasOwnProperty(key))
        this.salesOrder.push(this.finalTest.SalesOrder)
    }

    this.salesOrder = this.salesOrder[0];

    for (let key in this.salesOrder) {
      if (this.salesOrder.hasOwnProperty(key)) {
          this.totalTax += (this.salesOrder[key].Price * this.salesOrder[key].Quantity) * this.salesOrder[key].Tax;
          this.total += (this.salesOrder[key].Price * this.salesOrder[key].Quantity) + this.totalTax;
      }
    }

    console.log(this.total);
  }
}
