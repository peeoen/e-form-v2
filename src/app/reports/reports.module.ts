import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DndModule } from 'ngx-drag-drop';
import { SharedModule } from '../share/share.module';
import { CheckboxComponent, DropdownComponent, ImageComponent, LabelComponent, RadioComponent, TextComponent } from './component/controls/index';
import { ControlComponent, ControlListComponent, PageComponent, PageListComponent, ReportBuilderComponent, ReportHeaderComponent } from './component/index';
import { ReportFormComponent } from './container/report-form/report-form.component';
import { ReportComponent } from './container/report/report.component';
import { ReportRoutingModule } from './report-routing.module';

const mainComponents = [
    ReportComponent,
    ReportFormComponent,
    ReportBuilderComponent,
    ControlListComponent,
    ControlComponent,
    PageComponent,
    PageListComponent,
    ReportHeaderComponent,
];

const controlComponents = [
    LabelComponent,
    TextComponent,
    CheckboxComponent,
    RadioComponent,
    DropdownComponent,
    ImageComponent,
]


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DndModule,
        ReportRoutingModule,
    ],
    declarations: [
        ...mainComponents,
        ...controlComponents,
    ],
    exports: [
        ...mainComponents,
        ...controlComponents,
    ],
    entryComponents: [
        ...controlComponents,
    ],
    providers: [],
})
export class ReportsModule { }
