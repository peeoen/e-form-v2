import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatRadioModule, MatSidenavModule, MatToolbarModule, MatMenuModule } from '@angular/material';

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
        MatMenuModule
    ],
})
export class MaterialModule { }
