import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { BasicTableComponent } from './components/basic-table/basic-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'agency',component:BasicTableComponent},
  {path:'agency/:id',component:DetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
