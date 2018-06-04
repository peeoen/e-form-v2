import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../share/share.module';
import { ReportComponent } from './containers/report.component';


const components = [
    ReportComponent
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        ...components
    ],
    declarations: [
        ...components
    ],
    providers: [],
})
export class ReportModule { }
