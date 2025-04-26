import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [CommonModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
