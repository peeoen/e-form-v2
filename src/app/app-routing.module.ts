import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , redirectTo: '/reports', pathMatch: 'full' },
  // { path: 'reports', component: ReportComponent },
  // { path: 'report-form/:id', component: ReportFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
