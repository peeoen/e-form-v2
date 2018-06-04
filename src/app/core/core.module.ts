import { MaterialModule } from './material/index';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NGXSModule } from './state mangement/index';
@NgModule({
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        NGXSModule,
        MaterialModule,
        HttpClientModule,
    ],
    providers: [],
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
}
