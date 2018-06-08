import { ControlDirective } from './directives/control.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ControlHostDirective } from './directives/control-host.directive';
import { MaterialModule } from './material/index';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    MaterialModule,
  ],
  declarations: [
    ControlHostDirective,
    ControlDirective
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    MaterialModule,
    ControlHostDirective,
    ControlDirective
  ]
})
export class SharedModule { }
