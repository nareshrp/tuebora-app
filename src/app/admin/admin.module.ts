import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainrootComponent } from './mainroot/mainroot.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { NavSideHoverComponent } from './nav-side-hover/nav-side-hover.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { TueSidebarComponent } from './tue-sidebar/tue-sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { TueboraLogoComponent } from './tuebora-logo/tuebora-logo.component';
import { DatamodelComponent } from './datamodel/datamodel.component';
const COMPONENTS = [
                      MainrootComponent,
                      DashboardComponent,
                      UserPreferencesComponent,
                      NavSideHoverComponent,
                      HeaderNavComponent,
                      TueSidebarComponent,
                      TueboraLogoComponent,
                      DatamodelComponent
                    ];
@NgModule({
  declarations: COMPONENTS,
  imports: [
              CommonModule,
              HttpClientModule,
              FormsModule,
              ReactiveFormsModule,
              RouterModule.forChild(routes),
              SidebarModule.forRoot()
            ],
  exports: COMPONENTS
})
export class AdminModule { }
