import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionsComponent } from './components/submissions/submissions.component';
import { FormsComponent } from './components/forms/forms.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HistoryComponent } from './components/history/history.component';
import { ReportsComponent } from './components/reports/reports.component';
import { WorkflowComponent } from './components/workflow/workflow.component';

const routes: Routes = [
  {path:'',redirectTo:'submissions', pathMatch: 'full' },
  {
    path: "submissions",
    component: SubmissionsComponent
  },
  {
    path: "forms",
    component: FormsComponent
  },
  {
    path: "customers",
    component: CustomersComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },
  {
    path: "reports",
    component: ReportsComponent
  },
  {
    path: "workflow",
    component: WorkflowComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
