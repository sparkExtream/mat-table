import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'companies-list', pathMatch: 'full' },
  {
    path: 'companies-list',
    loadChildren: () =>
      import('./companies-list/companies-list.module').then(
        (m) => m.CompaniesListModule
      ),
  },
  { path: '**', redirectTo: 'companies-list' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
