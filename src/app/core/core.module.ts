import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../share/share.module';
import { NGXSModule } from './state mangement/index';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        NGXSModule,
        HttpClientModule,
        RouterModule,
        SharedModule,
    ],
    exports: [
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
