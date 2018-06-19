import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportsModule } from './reports/reports.module';
import { SharedModule } from './share/share.module';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ReportsModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
