import {Component, OnInit} from '@angular/core';
import * as alasql from 'alasql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'app';
  res;
  test = 'dsfhgsdfgsdfgsdf';


  ngOnInit() {

    alasql('CREATE table one; SELECT * INTO one FROM JSON("../assets/json/data.json")');

    // setTimeout(() => {
    //   this.res = alasql('SELECT * FROM one WHERE gender = "male" AND isActive = true');
    //   console.log(this.res);
    //   console.log('done');
    // }, 10000);

  }

  showTest() {
    this.res = alasql('SELECT * FROM one WHERE gender = "' + this.test + '" AND isActive = true');
    setTimeout(() => {
      console.log(this.res);
    }, 10000);
  }

}
