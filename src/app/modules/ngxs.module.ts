import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ReportsState } from '../states/index';

@NgModule({
    imports: [
        NgxsModule.forRoot([
            ReportsState
        ])
    ],
    exports: [
        NgxsModule
    ],
})
export class NGXSModule { }
