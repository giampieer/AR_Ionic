import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {

  constructor(public viewCtrl: ViewController) {
  }
  close() {
    this.viewCtrl.dismiss();
  }
  ngOnInit(): void {
  }
}
