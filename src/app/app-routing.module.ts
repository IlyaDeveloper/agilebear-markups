import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutRootComponent} from '@modules/layout-root/layout-root.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutRootComponent,
    children:
      [
        {
          path: '',
          loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule)
        },
        {
          path: 'about-us',
          loadChildren: () => import('./modules/pages/about-us/about-us.module').then(m => m.AboutUsModule)
        },
        {
          path: 'services',
          loadChildren: () => import('./modules/pages/services/services.module').then(m => m.ServicesModule)
        },
        {
          path: 'contact',
          loadChildren: () => import('./modules/pages/contact/contact.module').then(m => m.ContactModule)
        },
        {
          path: 'scrum-training',
          loadChildren: () => import('./modules/pages/scrum-training/scrum-training.module').then(m => m.ScrumTrainingModule)
        },
        {
          path: 'services/program',
          loadChildren: () => import('./modules/pages/program/program.module').then(m => m.ProgramModule)
        },
      ]
  },
  {
    path: 'ui',
    loadChildren: () => import('./modules/pages/ui/ui.module').then(m => m.UiModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
