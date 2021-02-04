import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastroenterology',
  templateUrl: './gastroenterology.component.html',
  styleUrls: ['./gastroenterology.component.css']
})
export class GastroenterologyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
