import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule, 
        MatIconModule, 
        MatListModule, 
        MatSidenavModule, 
        MatToolbarModule,
        MatCardModule,
        LayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatMenuModule
    ],
})
export class MaterialModule { }
