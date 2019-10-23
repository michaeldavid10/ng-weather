import { Component, OnInit } from '@angular/core';
import {loadingAnimation} from "../animations/loading.animation";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [loadingAnimation()]
})
export class LoadingComponent implements OnInit {
  _elements: string[] = ['#ffebee','#ffcdd2','#ef9a9a','#e57373','#ef5350'];
  public elements: string[];

  constructor() { }

  ngOnInit() {
    this.set();
  }

  set() {
    this.elements = this._elements;
    this.scheduleNextIteration();
  }

  scheduleNextIteration() {
    setTimeout(()=>{
      if (this.elements.length == 0) return this.set();
      this.clear();
    },100 * this._elements.length + 300);
  }

  clear(){
    this.elements = [];
    this.scheduleNextIteration();
  }
}
