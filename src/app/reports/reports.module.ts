import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { DndModule } from 'ngx-drag-drop';
import { OwlModule } from 'ngx-owl-carousel';
import { SharedModule } from '../share/share.module';
import { ControlListComponent } from './component/control-list/control-list.component';
import { ControlComponent } from './component/control/control.component';
import { CheckboxComponent } from './component/controls/checkbox/checkbox.component';
import { DropdownComponent } from './component/controls/dropdown/dropdown.component';
import { ImageComponent } from './component/controls/image/image.component';
import { LabelComponent } from './component/controls/label/label.component';
import { RadioComponent } from './component/controls/radio/radio.component';
import { TextComponent } from './component/controls/text/text.component';
import { PageListComponent } from './component/page-list/page-list.component';
import { PageComponent } from './component/page/page.component';
import { ReportBuilderComponent } from './component/report-builder/report-builder.component';
import { ReportHeaderComponent } from './component/report-header/report-header.component';
import { AlignmentComponent } from './component/tools/alignment/alignment.component';
import { FontsComponent } from './component/tools/fonts/fonts.component';
import { SizeComponent } from './component/tools/size/size.component';
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
    providers: [
    ],
})
export class ReportsModule { }
