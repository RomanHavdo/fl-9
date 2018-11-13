import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'src-app';
  showModal = false;
  
  lists=[];
  ngOnInit() {

  }
 
  data(value){
    this.lists.push(value);
  }

  openModal = function () {
    this.showModal = true;
  }

  closeModal(value) {
    this.showModal = value;
  }
}
