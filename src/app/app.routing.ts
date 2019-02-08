import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products/:productId', component: ProductDetailComponent}
];

export const routing = RouterModule.forRoot(routes);
