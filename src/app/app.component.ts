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
  gender;
  age;
  active = false;

  levelNum:number;
  levels:Array<Object> = [
      {num: 0, name: "AA"},
      {num: 1, name: "BB"}
  ];

  toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }



  ngOnInit() {

    alasql('CREATE table one; SELECT * INTO one FROM JSON("../assets/json/data.json")');

  }

  showTest() {
this.age =  parseInt(this.age);
console.log(typeof this.age);
    this.res = alasql('SELECT * FROM one WHERE gender = "'+this.gender+'" AND age = '+this.age+ ' AND isActive = '+this.active );
      setTimeout(() => {
        console.log(this.res);
      }, 10000);
    }
}
