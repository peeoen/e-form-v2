import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportFormComponent } from './container/report-form/report-form.component';
import { ReportComponent } from './container/report/report.component';


const routes: Routes = [
  { path: 'reports', component: ReportComponent },
  { path: 'report-form/:id', component: ReportFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    
  ]
})
export class ReportRoutingModule { }
