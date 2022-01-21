import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TransactionDetailsComponent } from './pages/transaction-details/transaction-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'transactions', component: TransactionDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
