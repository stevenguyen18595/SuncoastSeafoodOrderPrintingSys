import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SuncoastItem } from '../model/SuncoastItem.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],

})
export class OrderComponent implements OnInit {
  currentItemsInThisOrder: SuncoastItem[] = [];
  selectedItem: SuncoastItem = {name:"",size:"",price:"",category:"",description:"",quantity:""}
  totalMoneyForThisOrder: number = 0;
  constructor( private orderService: OrderService) {
   }

  ngOnInit(): void {
    this.currentItemsInThisOrder = this.orderService.getAllItemInThisOrder();
    for (let item of this.currentItemsInThisOrder){
      this.totalMoneyForThisOrder = this.totalMoneyForThisOrder + parseFloat(item.price)*parseFloat(item.quantity);
    }

  }
  deleteThisItem(item: SuncoastItem){
    this.orderService.deleteItem(item)
  }

}
