import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'products',loadChildren:()=>import('./features/products/products.module').then(mod=>mod.ProductsModule)}
];
