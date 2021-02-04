import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
    
  }

  changeRouteTo(arr){
    this.route.navigate(arr);
  }

  ngDoCheck(){
    $('.flexslider').flexslider();
  }



//   public loadScript() {
//     let body = <HTMLDivElement> document.body;
//     let script = document.createElement('script');
//     script.innerHTML = '';
//     script.src = '../assets/js/jquery.flexslider.js';
//     script.async = false;
//     script.defer = true;
//     body.appendChild(script);
// }
customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
