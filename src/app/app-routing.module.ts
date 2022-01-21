import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchresultComponent } from './fetchresult/fetchresult.component';

const routes: Routes = [
  {path:'**',component:FetchresultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
