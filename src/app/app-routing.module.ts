import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './reports/report/containers/report.component';

const routes: Routes = [
  { path: '' , redirectTo: '/reports', pathMatch: 'full' },
  { path: 'reports', component: ReportComponent },
  { path: 'posts', component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
