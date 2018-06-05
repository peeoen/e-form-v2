import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from '../share/share.module';
import { ControlComponent, ControlListComponent, PageComponent, PageListComponent, ReportBuilderComponent } from './component/index';
import { ReportFormComponent } from './container/report-form/report-form.component';
import { ReportComponent } from './container/report/report.component';
import { ReportRoutingModule } from './report-routing.module';


const components = [
    ReportComponent,
    ReportFormComponent,
    ControlListComponent,
    ControlComponent,
    ReportBuilderComponent,
    PageListComponent,
    PageComponent,
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PdfViewerModule,
        ReportRoutingModule,

    ],
    declarations: [
        ...components,
    ],
    exports: [
        // ...components,
    ],
    providers: [],
})
export class ReportsModule { }
