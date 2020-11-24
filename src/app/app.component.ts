import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'receipt'
  url = 'https://northwind.now.sh/api/categories';
  receipt = [];

  constructor(private http: HttpClient) { 
    this.http.get(this.url).toPromise().then(data => {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          this.receipt.push(data[key]);
        }
      }
    });

    console.log(this.receipt);
   }

  ngOnInit() {      
    //this.printReceipt();
  }

  public printReceipt() {
    console.log('Ya se termino de cargar');
    window.print();
  }
}
