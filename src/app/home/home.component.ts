import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<p>This is my inline template HTML!</p>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

///   templateUrl: './home.component.html',
