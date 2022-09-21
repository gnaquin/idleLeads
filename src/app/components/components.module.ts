import { NgModule } from "@angular/core";
import { HomePageRoutingModule } from '../home/home-routing.module';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { DesktopHeaderComponent } from "./desktop-header/desktop-header.component";
import { IonicModule } from "@ionic/angular";


@NgModule ({
    imports: [
        HomePageRoutingModule,
        IonicModule
    ],
    declarations: [HeaderComponent, FooterComponent, DesktopHeaderComponent],
    exports: [HeaderComponent, FooterComponent, DesktopHeaderComponent]
})

export class ComponentsModule{}

