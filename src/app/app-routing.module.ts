import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '' , redirectTo: '/reports', pathMatch: 'full' },
  { path: 'test', component: TestComponent }
  // { path: 'reports', component: ReportComponent },
  // { path: 'report-form/:id', component: ReportFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
