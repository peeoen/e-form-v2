import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './reports/container/report/report.component';
import { ReportFormComponent } from './reports/container/report-form/report-form.component';

const routes: Routes = [
  { path: '' , redirectTo: '/reports', pathMatch: 'full' },
  { path: 'reports', component: ReportComponent },
  { path: 'report-form/:id', component: ReportFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
