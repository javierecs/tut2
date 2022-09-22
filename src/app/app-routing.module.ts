import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id', component:DetailsProductComponent},
  {path: '**', component:NotFound404Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
