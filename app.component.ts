import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '---Learning Component Communication---';
  placeholderVal = "Enter text";
  userLoggedIn: boolean = false;


  log(x) {
    console.log('Received:' + x);
  }

  getTitle() {
    return this.title;
  }

  ngOnInit(): void {

  }
}
