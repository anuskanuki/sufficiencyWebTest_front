import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'aluno',
        loadChildren: () => import('./pages/aluno/aluno.module').then(m => m.AlunoModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ],
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
