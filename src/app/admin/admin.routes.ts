import { Route } from '@angular/router';
import { MainrootComponent } from './mainroot/mainroot.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { DatamodelComponent } from './datamodel/datamodel.component';
export const routes: Route[]=[
  {
    path: '',
    component: DashboardComponent,
  },
  {
     path: 'user-preferences',
    component: UserPreferencesComponent,
  },
  {
     path: 'datamodel',
    component: DatamodelComponent,
  }

]
