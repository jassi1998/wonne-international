import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allergics',
  templateUrl: './allergics.component.html',
  styleUrls: ['./allergics.component.css']
})
export class AllergicsComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  changeRouteTo(arr){
    this.route.navigate(arr);
  }
  ngAfterViewInit(){ var acc = document.getElementsByClassName("accordion");
	var i;
	
	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		this.classList.toggle("actives");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
		  panel.style.maxHeight = null;
		} else {
		  panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	  });
  }
}
}
