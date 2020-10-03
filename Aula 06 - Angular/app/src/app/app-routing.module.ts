import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { 
        path: 'home', 
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
      },
      { 
        path: 'about', 
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) 
      },
      
    ],

  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
