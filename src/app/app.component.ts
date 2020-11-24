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
    this.http.get('https://northwind.now.sh/api/categories').toPromise().then(data => {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          this.receipt.push(data[key]);
        }
      }
    });
   }

  ngOnInit() {      
    // Simple GET request with response type <any>
    console.log(this.receipt);
  }
}
