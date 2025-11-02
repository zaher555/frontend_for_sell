import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'products',loadChildren:()=>import('./features/products/products.module').then(mod=>mod.ProductsModule)},
    {path:'auth',loadChildren:()=>import('./features/auth/auth.module').then(mod=>mod.authModule)},
    {path:'profile',loadChildren:()=>import('./features/profile/profile.module').then(mod=>mod.ProfileModule)},
    {path:'cart',loadChildren:()=>import('./features/cart/cart.module').then(mod=>mod.CartModule)},
];
