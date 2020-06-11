import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';


const routes: Routes = [
  { path: 'Cars', component: CarsComponent }, 
  { path: '', redirectTo: '/Cars', pathMatch: 'full' },
  {
    path: "car-details/:car", 
    component: CarDetailsComponent
  }, 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }