import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'products',loadChildren:()=>import('./features/products/products.module').then(mod=>mod.ProductsModule)},
    {path:'auth',loadChildren:()=>import('./features/auth/auth.module').then(mod=>mod.authModule)},
];
