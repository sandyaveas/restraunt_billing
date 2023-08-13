import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './masters/menu/menu.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    EditClientComponent,
    ListClientComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
