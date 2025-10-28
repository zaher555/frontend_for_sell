import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { CardModule } from 'primeng/card';
import { SpeedDial } from 'primeng/speeddial';
import { MessageService } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { NavComponent } from '../nav/nav.component';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { FieldsetModule } from 'primeng/fieldset';
import { ProductCardComponent } from './product-card/product-card.component';
import { TabsModule } from 'primeng/tabs';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    ProductCardComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    BadgeModule,
    CardModule,
    SpeedDial,
    TagModule,
    DrawerModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    SelectModule,
    SliderModule,
    FieldsetModule,
    TabsModule
  ],
  providers:[
    MessageService
  ]
})
export class ProductsModule { 
}
