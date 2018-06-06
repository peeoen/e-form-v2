import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../share/share.module';
import { CheckboxComponent } from './component/controls/checkbox/checkbox.component';
import { DropdownComponent } from './component/controls/dropdown/dropdown.component';
import { ImageComponent } from './component/controls/image/image.component';
import { LabelComponent } from './component/controls/label/label.component';
import { RadioComponent } from './component/controls/radio/radio.component';
import { TextComponent } from './component/controls/text/text.component';
import { ControlComponent, ControlListComponent, PageComponent, PageListComponent, ReportBuilderComponent } from './component/index';
import { ReportFormComponent } from './container/report-form/report-form.component';
import { ReportComponent } from './container/report/report.component';
import { ReportRoutingModule } from './report-routing.module';


const components = [
    ReportComponent,
    ReportFormComponent,
    ReportBuilderComponent,
    ControlListComponent,
    ControlComponent,
    PageComponent,
    PageListComponent,
    LabelComponent,
    TextComponent,
    CheckboxComponent,
    RadioComponent,
    DropdownComponent,
    ImageComponent,
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReportRoutingModule,
    ],
    declarations: [
        ...components,
    ],
    exports: [
        ...components,
    ],
    providers: [],
})
export class ReportsModule { }
