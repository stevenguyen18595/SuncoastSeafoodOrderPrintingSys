import { Component, ElementRef, Inject, OnInit, ɵɵsetComponentScope,NgZone, Output,EventEmitter } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { stringify } from 'querystring';
import { SuncoastItemDialogComponent } from '../suncoast-item-dialog/suncoast-item-dialog.component';
import { SuncoastItem } from '../model/SuncoastItem.model'
import { OrderService } from '../services/order.service';


@Component({
  selector: 'app-suncoast-item',
  templateUrl: './suncoast-item.component.html',
  styleUrls: ['./suncoast-item.component.css'],
  
})
export class SuncoastItemComponent implements OnInit {

  constructor(public dialog: MatDialog, private ngZone: NgZone, public dialogRef: MatDialogRef<SuncoastItemDialogComponent>, private orderService:OrderService) {
  }
  fishAndChipsPacks: SuncoastItem[] = [];
  fishes: SuncoastItem[] = [];
  burgers: SuncoastItem[] = [];
  SideDished: SuncoastItem[] = [];
  chips: SuncoastItem[] = [];
  currentItems: SuncoastItem[] = [];
  // currentItemsAfterEliminatingDublicates: SuncoastItem[] = [];
  currentItemsInStringFormat = "";
  selectedQuantity: string ="";
  SuncoastItemDescription: string = "";
  items = require('../../assets/ItemsInSuncoastSeafoodStore.json');
  ngOnInit(): void {
    for (let item of this.items) {
      if (item.category == "Fish And Chip Pack") {
        this.fishAndChipsPacks.push(item);
      } else if (item.category == "Fish") {
        this.fishes.push(item);
      } else if (item.category == "Burgers") {
        this.burgers.push(item);
      } else if (item.category == "Chips") {
        this.chips.push(item);
      } else {
        this.SideDished.push(item);
      }
    }
    //the 2 below for testing purposes
    console.log(this.items);
    console.log(this.fishAndChipsPacks)
    this.currentItems = this.orderService.getAllItemInThisOrder();
  }
  openDialog(item: SuncoastItem) {
    // item.quantity = String(this.suncoastItem.selectedQuantity);
    const dialogRef = this.dialog.open(SuncoastItemDialogComponent,{disableClose:false,
      data:{quantity: this.selectedQuantity     
        , description: this.SuncoastItemDescription}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:' + result);
      item.quantity = result.selectedQuantity;
      item.description = result.dialogDescription;
      console.log(item.quantity);
      if(result.selectedQuantity != undefined){
        this.addItemToOrder(item);
      }
    });
  }
  
  printThisPage() {
    //window.print();
    console.log(this.currentItems)
  }
  addItemToOrder(item: SuncoastItem) {
    this.currentItemsInStringFormat = "";
    this.orderService.addItemToOrder(item);
    this.currentItems = this.orderService.getAllItemInThisOrder();
  }
  deleteCurrentOrder() {
    this.currentItems = [];
    this.orderService.deleteAllItemInThisOrder();
    this.currentItemsInStringFormat = "";
  }


}

