import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalLayoutComponent } from './layout/signal-layout/signal-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';

const routes: Routes = [
  {
    path: '',
    component: SignalLayoutComponent,
    children: [
      {
        path: 'counter',
        component: CounterPageComponent,
      },
      {
        path: 'properties',
        component: PropertiesPageComponent,
      },
      {
        path: 'user-info',
        component: UserInfoPageComponent,
      },
      {
        path: '**',
        redirectTo: 'counter',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalsRoutingModule {}
