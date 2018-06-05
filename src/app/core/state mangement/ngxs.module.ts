import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { ReportsState } from './states/index';

@NgModule({
    imports: [
        NgxsModule.forRoot([
            ReportsState
        ]),
        NgxsReduxDevtoolsPluginModule.forRoot()
    ],
    exports: [
        NgxsModule,
        NgxsReduxDevtoolsPluginModule
    ]
})
export class NGXSModule { }
