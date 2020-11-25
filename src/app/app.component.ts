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

    console.log(test);

    this.getTotalTax();
   }

  ngOnInit() {      
    /*setTimeout(() => {
      window.print();
      console.log('Ya se termino de cargar');
    }, 4000);*/
  }

  getTotal() {
    
  }

  getTotalTax() {
    let salesOrder = [];
    let Tax : number = 0.00;
    for (let key in test[0].SalesOrder) {
      if(test[0].SalesOrder.hasOwnProperty(key))
        salesOrder.push(test[0].SalesOrder)
    }

    /*for (let key in salesOrder) {
      if (salesOrder.hasOwnProperty.call(key)) {
        console.log(salesOrder[key]);
        this.totalTax += (salesOrder[key].Price * salesOrder[key].Quantity) * salesOrder[key].Tax;
      }

      console.log(this.totalTax);
    }*/
  }
}
