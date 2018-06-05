import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../share/share.module';
import { ReportFormComponent } from './container/report-form/report-form.component';
import { ReportComponent } from './container/report/report.component';
import { ControlListComponent } from './component/control-list/control-list.component';
import { ControlComponent } from './component/control/control.component';
import { ReportBuilderComponent } from './component/report-builder/report-builder.component';
import { PageListComponent } from './component/page-list/page-list.component';
import { PageComponent } from './component/page/page.component';


const components = [
    ReportComponent,
    ReportFormComponent,
    ControlListComponent,
    ControlComponent,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        ...components
    ],
    declarations: [
        ...components,
        ReportBuilderComponent,
        PageListComponent,
        PageComponent,
    ],
    providers: [],
})
export class ReportsModule { }
