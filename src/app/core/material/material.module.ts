import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

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
