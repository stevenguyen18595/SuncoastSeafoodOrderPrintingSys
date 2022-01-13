import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

import { OrderComponent } from "./order/order.component";
import { SuncoastItemComponent } from "./suncoast-item/suncoast-item.component";

const appRoutes: Routes = [
    {path:'', redirectTo:'/Suncoast-item',pathMatch:'full'},
    {path:'Suncoast-item', component: SuncoastItemComponent},
    {path:'order', component:OrderComponent}
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule{

    
}