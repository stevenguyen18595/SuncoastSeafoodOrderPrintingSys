import { EventEmitter } from "@angular/core";
import { SuncoastItem } from "../model/SuncoastItem.model";



export class OrderService{
    newItemAdded = new EventEmitter<SuncoastItem>();
    private SuncoastCurrenItemInOrder: SuncoastItem[] = [];
}