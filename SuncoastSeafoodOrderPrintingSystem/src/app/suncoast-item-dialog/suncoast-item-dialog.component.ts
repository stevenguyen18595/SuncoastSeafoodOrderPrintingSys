import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {SuncoastItemComponent} from '../suncoast-item/suncoast-item.component'

@Component({
  selector: 'app-suncoast-item-dialog',
  templateUrl: './suncoast-item-dialog.component.html',
  styleUrls: ['./suncoast-item-dialog.component.css']
})

export class SuncoastItemDialogComponent implements OnInit {
  quantityOfItem: string[] =["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]
  selectedQuantity: string = "";
  constructor(public dialogRef: MatDialogRef<SuncoastItemDialogComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }
  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
export class DialogData {
  public selectedQuantity: string ="";
  public dialogDescription: string = "";

}

