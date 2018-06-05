import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatCardModule } from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule, 
        MatIconModule, 
        MatListModule, 
        MatSidenavModule, 
        MatToolbarModule,
        MatCardModule,
        LayoutModule
    ],
})
export class MaterialModule { }
