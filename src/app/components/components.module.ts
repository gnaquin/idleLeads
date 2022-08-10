import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "../components/footer/footer.component";

@NgModule ({
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent]
})

export class ComponentsModule{}

