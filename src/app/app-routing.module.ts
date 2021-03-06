import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopNewsComponent } from './top-news/top-news.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  {path:'details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
