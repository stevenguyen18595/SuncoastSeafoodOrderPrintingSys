import { Component, ElementRef, Inject, OnInit, ɵɵsetComponentScope,NgZone } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SuncoastItemDialogComponent } from '../suncoast-item-dialog/suncoast-item-dialog.component';
import { SuncoastItem } from '../SuncoastItem'
@Component({
  selector: 'app-suncoast-item',
  templateUrl: './suncoast-item.component.html',
  styleUrls: ['./suncoast-item.component.css']
})
export class SuncoastItemComponent implements OnInit {

  constructor(public dialog: MatDialog, private ngZone: NgZone, public dialogRef: MatDialogRef<SuncoastItemDialogComponent>) { }
  fishAndChipsPacks: SuncoastItem[] = [];
  fishes: SuncoastItem[] = [];
  burgers: SuncoastItem[] = [];
  SideDished: SuncoastItem[] = [];
  chips: SuncoastItem[] = [];
  currentItems: SuncoastItem[] = [];
  currentItemsAfterEliminatingDublicates: SuncoastItem[] = [];
  currentItemsInStringFormat = "";


  items = require('../../assets/ItemsInSuncoastSeafoodStore.json');
  ngOnInit(): void {
    for (let i in this.items.items) {
      if (this.items.items[i].category == "Fish And Chip Pack") {
        this.fishAndChipsPacks.push(this.items.items[i]);
      } else if (this.items.items[i].category == "Fish") {
        this.fishes.push(this.items.items[i]);
      } else if (this.items.items[i].category == "Burgers") {
        this.burgers.push(this.items.items[i]);
      } else if (this.items.items[i].category == "Chips") {
        this.chips.push(this.items.items[i]);
      } else {
        this.SideDished.push(this.items.items[i]);
      }
    }
    console.log(this.fishAndChipsPacks)
  }
  printThisPage() {
    //window.print();
    console.log(this.currentItems)
  }
  addItemToOrder(item: SuncoastItem) {
    this.currentItemsInStringFormat = "";
    this.currentItems.push(item);
    for (let currentItem of this.currentItems) {
      this.currentItemsInStringFormat = this.currentItemsInStringFormat + currentItem.name + currentItem.size +"("+ currentItem.quantity +")"+ "," + " ";
    }
    console.log(this.currentItems)
  }
  deleteCurrentOrder() {
    this.currentItems = [];
    this.currentItemsInStringFormat = "";
  }

  openDialog(item: SuncoastItem) {
    // item.quantity = String(this.suncoastItem.selectedQuantity);
    const dialogRef = this.dialog.open(SuncoastItemDialogComponent,{disableClose:false
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:' + result);
      item.quantity = result;
      this.addItemToOrder(item);
    });

  }
  onNoClick(): void {
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }
}

