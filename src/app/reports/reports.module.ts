import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { DndModule } from 'ngx-drag-drop';
import { OwlModule } from 'ngx-owl-carousel';
import { SharedModule } from '../share/share.module';
import { CheckboxComponent, DropdownComponent, ImageComponent, LabelComponent, RadioComponent, TextComponent } from './component/controls/index';
import { ControlComponent, ControlListComponent, PageComponent, PageListComponent, ReportBuilderComponent, ReportHeaderComponent } from './component/index';
import { AlignmentComponent, FontsComponent, SizeComponent } from './component/tools/index';
import { StylesComponent } from './component/tools/styles/styles.component';
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

const toolsComponent = [
    FontsComponent,
    AlignmentComponent,
    SizeComponent,
    StylesComponent
]


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DndModule,
        ColorPickerModule,
        OwlModule,
        ReportRoutingModule,
    ],
    declarations: [
        ...mainComponents,
        ...controlComponents,
        ...toolsComponent,
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
