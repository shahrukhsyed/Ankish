import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

     name:string="";
    address:string="";
    pincode:number;
    status:string="INVALID";


    getData(){

        this.status="VALID";

    }
 }