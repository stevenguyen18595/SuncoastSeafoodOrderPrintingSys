import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SuncoastItemComponent } from './suncoast-item/suncoast-item.component';
import { OrderComponent } from './order/order.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SuncoastItemDialogComponent } from './suncoast-item-dialog/suncoast-item-dialog.component';
import {  MatDialogModule,MatDialogRef  } from '@angular/material/dialog';
import { MatOptionModule, } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { OrderService } from './services/order.service';
@NgModule({
  declarations: [
    AppComponent,
    SuncoastItemComponent,
    OrderComponent,
    SuncoastItemDialogComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [ {provide: MatDialogRef, useValue: {hasBackdrop: false}},{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}, OrderService],
  bootstrap: [AppComponent],
  entryComponents:[SuncoastItemDialogComponent]
})
export class AppModule { }
