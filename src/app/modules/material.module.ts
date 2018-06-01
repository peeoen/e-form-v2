import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
    exports: [
        MatButtonModule, 
        MatIconModule, 
        MatListModule, 
        MatSidenavModule, 
        MatToolbarModule,
        LayoutModule
    ],
})
export class MaterialModule { }
