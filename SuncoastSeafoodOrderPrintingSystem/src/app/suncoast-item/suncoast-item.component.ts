import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import * as items from '../../assets/ItemsInSuncoastSeafoodStore.json';
@Component({
  selector: 'app-suncoast-item',
  templateUrl: './suncoast-item.component.html',
  styleUrls: ['./suncoast-item.component.css']
})
export class SuncoastItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(items);
  }
  printThisPage(){
    window.print();
  }
  
}
