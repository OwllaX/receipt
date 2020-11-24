import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPrintModule } from 'ngx-print';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        [CommonModule],
        BrowserModule,
        HttpClientModule,
        NgxPrintModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
