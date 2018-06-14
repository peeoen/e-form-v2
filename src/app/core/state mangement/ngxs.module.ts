import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { ControlsState } from './states/control.state';
import { ReportsState } from './states/report.state';

@NgModule({
    imports: [
        NgxsModule.forRoot([
            ReportsState,
            ControlsState
        ]),
        NgxsReduxDevtoolsPluginModule.forRoot()
    ],
    providers: [

    ],
    exports: [
        NgxsModule,
        NgxsReduxDevtoolsPluginModule,
    ]
})
export class NGXSModule { }
