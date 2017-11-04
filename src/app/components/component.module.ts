import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuaThongTinComponent } from './../guest/sua-thong-tin/sua-thong-tin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SuaThongTinComponent
  ],
  exports: [SuaThongTinComponent],
})
export class ComponentModule { }
