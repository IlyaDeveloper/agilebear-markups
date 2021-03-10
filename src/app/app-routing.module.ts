import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutRootComponent} from '@modules/layout-root/layout-root.component';

/*


Home   About Us   Services      Scrum Training      Contact Us      |


* */
const routes: Routes = [
  {
    path: '',
    component: LayoutRootComponent,
    children:
      [
        {
          path: 'home',
          loadChildren: () => import('./modules/pages/contact/contact.module').then(m => m.ContactModule)
        },
        {
          path: 'about-us',
          loadChildren: () => import('./modules/pages/contact/contact.module').then(m => m.ContactModule)
        },
        {
          path: 'services',
          loadChildren: () => import('./modules/pages/contact/contact.module').then(m => m.ContactModule)
        },
        {
          path: 'contact',
          loadChildren: () => import('./modules/pages/contact/contact.module').then(m => m.ContactModule)
        },
        {
          path: 'contact',
          loadChildren: () => import('./modules/pages/contact/contact.module').then(m => m.ContactModule)
        },
        // {
        //   path: 'scrum-training',
        //   loadChildren: () => import('./modules/pages/contact/contact.module').then(m => m.ContactModule)
        // },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
