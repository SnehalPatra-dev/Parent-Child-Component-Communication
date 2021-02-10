import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childcompo-b',
  templateUrl: './childcompo-b.component.html',
  styleUrls: ['./childcompo-b.component.scss']
})
export class ChildcompoBComponent implements OnInit {

  @Input() loggedIn: boolean;
  @Input() yourName: string;
  @Input() composedPoem: string;

  constructor() { }

  title = '---Learning Component Communication---';


  getTitle() {
    return this.title;
  }

  log(x) {
    console.log('Received:' + x);
  }

  Loginevent(x) {
    this.loggedIn = true;
    alert("Hello " + x);
  }

  getyourName() {
    /*  alert("Returned " + this.yourName);  */
    return this.yourName;
  }

  getyourPoem() {
    return this.composedPoem;
  }

  ngOnInit(): void {
  }

}

