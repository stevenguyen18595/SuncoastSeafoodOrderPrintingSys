import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SuncoastItem } from '../model/SuncoastItem.model';
import { SuncoasrOrder } from '../model/SuncoastOrder.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],

})
export class OrderComponent implements OnInit {
  suncoastOrder: SuncoasrOrder = {
    orderNumber: 0,
    listOfItemInOrder: [],
    orderTime: new Date(),
    totalAmount: 0
  };
  currentItemsInThisOrder: SuncoastItem[] = [];
  selectedItem: SuncoastItem = {name:"",size:"",price:"",category:"",description:"",quantity:""}
  totalMoneyForThisOrder: number = 0;
  jsonPath = require('../../assets/orderHistory.json');


  constructor( private orderService: OrderService) {
   }

  ngOnInit(): void {
    this.currentItemsInThisOrder = this.orderService.getAllItemInThisOrder();
    for (let item of this.currentItemsInThisOrder){
      this.suncoastOrder.totalAmount = this.suncoastOrder.totalAmount + parseFloat(item.price)*parseFloat(item.quantity);
    }
    this.totalMoneyForThisOrder = this.suncoastOrder.totalAmount;
  }

  deleteThisItemFromCurrentOrder(item: SuncoastItem){
    this.orderService.deleteItem(item)
    this.currentItemsInThisOrder = this.orderService.getAllItemInThisOrder();
    this.suncoastOrder.totalAmount = 0;
    for (let item of this.currentItemsInThisOrder){
      this.suncoastOrder.totalAmount = this.suncoastOrder.totalAmount + parseFloat(item.price)*parseFloat(item.quantity);
    }
    this.totalMoneyForThisOrder = this.suncoastOrder.totalAmount;
  }
  setOrderNumberForThisOrder(){
    
    let orderHistory = JSON.parse(this.jsonPath);
    if(Object.entries(orderHistory).length == 0){
      this.suncoastOrder.orderNumber = 1;
    }else{
      this.suncoastOrder.orderNumber = 2;
    }
  }
  sendThisOrderToOrderHistoryDB(){
    
  }
  

}
