import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {HeaderComponent} from './header/header.component';
import { ArComponent } from './first/ar/ar.component';
import { AdpComponent } from './second/adp/adp.component';

const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'add_video', component: FirstComponent, data: { title: 'Video' } },
  { path: 'add_remove', component: ArComponent, data: { title: 'Video' } },
  { path: 'second', component: SecondComponent, data: { title: 'Products' } },
  { path: 'add_product', component:AdpComponent, data: { title: 'Products' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
