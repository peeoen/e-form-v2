import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { DndModule } from 'ngx-drag-drop';
import { SharedModule } from '../share/share.module';
import { CheckboxComponent, DropdownComponent, ImageComponent, LabelComponent, RadioComponent, TextComponent } from './component/controls/index';
import { ControlComponent, ControlListComponent, PageComponent, PageListComponent, ReportBuilderComponent, ReportHeaderComponent } from './component/index';
import { AlignmentComponent, FontsComponent, SizeComponent } from './component/tools/index';
import { ReportFormComponent } from './container/report-form/report-form.component';
import { ReportComponent } from './container/report/report.component';
import { ReportRoutingModule } from './report-routing.module';
import { StylesComponent } from './component/tools/styles/styles.component';

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

const toolsComponent = [
    FontsComponent,
    AlignmentComponent,
    SizeComponent,
]


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DndModule,
        ColorPickerModule,
        ReportRoutingModule,
    ],
    declarations: [
        ...mainComponents,
        ...controlComponents,
        ...toolsComponent,
        StylesComponent
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
