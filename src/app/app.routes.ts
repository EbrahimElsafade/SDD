import { Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';


export const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: HomepageComponent,
    },
    {
      path: '**',
      redirectTo: '/en',
    },
  ];