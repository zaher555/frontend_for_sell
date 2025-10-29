import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from "@angular/forms";
import { AutoCompleteModule } from "primeng/autocomplete";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { OverlayBadgeModule } from "primeng/overlaybadge";
import { ToggleButton } from "primeng/togglebutton";
import { ToolbarModule } from "primeng/toolbar";
import { CardModule } from "primeng/card";
import { DrawerModule } from "primeng/drawer";
import { FieldsetModule } from "primeng/fieldset";
import { InputNumberModule } from "primeng/inputnumber";
import { SelectModule } from "primeng/select";
import { SliderModule } from "primeng/slider";
import { SpeedDial } from "primeng/speeddial";
import { TabsModule } from "primeng/tabs";
import { TagModule } from "primeng/tag";
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations:[HeaderComponent,FooterComponent],
    imports:[
        ButtonModule,
        ToolbarModule,
        InputTextModule,
        MenuModule,
        BadgeModule,
        OverlayBadgeModule,
        ToggleButton,
        FormsModule,
        AutoCompleteModule,
        BadgeModule,
        CardModule,
        SpeedDial,
        ToastModule,
        TagModule,
        DrawerModule,
        ButtonModule,
        InputNumberModule,
        FormsModule,
        SelectModule,
        SliderModule,
        FieldsetModule,
        TabsModule,
        DataViewModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        ButtonModule,
        ToolbarModule,
        InputTextModule,
        MenuModule,
        BadgeModule,
        OverlayBadgeModule,
        ToggleButton,
        AutoCompleteModule,
        BadgeModule,
        CardModule,
        SpeedDial,
        ToastModule,
        TagModule,
        DrawerModule,
        ButtonModule,
        InputNumberModule,
        SelectModule,
        SliderModule,
        FieldsetModule,
        TabsModule,
        DataViewModule
    ]
})
export class SharedModule{

}