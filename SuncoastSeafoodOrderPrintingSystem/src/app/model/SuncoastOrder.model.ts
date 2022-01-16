import { Time } from "@angular/common";
import { time } from "console";
import { SuncoastItem } from "./SuncoastItem.model";

export class SuncoasrOrder{
    orderNumber: number = 0;
    listOfItemInOrder : SuncoastItem[] = [];
    orderTime: Date = new Date();
    totalAmount: number = 0;
}