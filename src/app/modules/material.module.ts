import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

const materialModules = [
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
})
export class MaterialModule { }
