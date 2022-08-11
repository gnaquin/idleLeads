import { NgModule } from "@angular/core";
import { HomePageRoutingModule } from '../home/home-routing.module';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "../components/footer/footer.component";

@NgModule ({
    imports: [
        HomePageRoutingModule
    ],
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent]
})

export class ComponentsModule{}

