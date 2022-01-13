import { EventEmitter, Injectable, Output } from "@angular/core";
import { appendFile } from "fs";
import { SuncoastItem } from "../model/SuncoastItem.model";


@Injectable()
export class OrderService{
    private currentSuncoastItemInOrder: SuncoastItem[] = [];

    addItemToOrder(item:SuncoastItem){
        this.currentSuncoastItemInOrder.push(item);
    }
    getAllItemInThisOrder(): SuncoastItem [] {
        return this.currentSuncoastItemInOrder;
    }
    deleteAllItemInThisOrder(): SuncoastItem[]{
        return this.currentSuncoastItemInOrder = [];
    }
    deleteItem(suncoastItem: SuncoastItem){
        const removeIndex = this.currentSuncoastItemInOrder.findIndex(item => item.name == suncoastItem.name)
        this.currentSuncoastItemInOrder.splice(removeIndex,1)
    }
}