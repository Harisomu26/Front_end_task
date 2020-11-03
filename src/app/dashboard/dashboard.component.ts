import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  cart_cout: any = 0;
  cart_id = "Demo";
  car:any;
  cln:any;
  catt:any= " Product under Category 1"
  constructor() {

  }

  ngOnInit(): void {

  }
  cat1() {
    this.catt =" Product under Category 1"
  }
  cat2() {
    this.catt = " Product under Category 2"
  }
  cat3() {
    this.catt = " Product under Category 3"

  }
  cat4() {
    this.catt = " Product under Category 4"

  }
  cart1() {
    document.getElementById("myModal").style.display = "block";
    // document.getElementById("myModal").innerHTML=``


  }
  cart1_close() {
    document.getElementById("myModal").style.display = "none";

  }

  cart_list(idd) {
    this.cart_cout = this.cart_cout + 1
    this.cart_id=idd 
    // var select = document.getElementById(idd);

    // var secondDivContent = document.getElementById('div2');
    // secondDivContent.innerHTML
    // console.log(document.getElementById("card11"))
    var itm =  document.getElementById("card11")
    console.log(itm)
    this.cln = itm.cloneNode(true);
    console.log(this.cln)

   var sd = document.getElementById("clon").appendChild(this.cln);
   sd.style.display="block"

  }
  
  remove(){
    this.cart_cout = this.cart_cout - 1

    var list = document.getElementById("clon");
    list.removeChild(list.childNodes[0]); 
    console.log("dfals")

  }
}
