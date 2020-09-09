import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeComponent} from'./components/employee/employee.component';
import{ContactComponent} from'./components/contact/contact.component';
import{HomeComponent} from'./components/home/home.component';
// import{EmployeeListComponent} from './components/employee-List/employee-List.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/User/User.component';
import{AddUserComponent} from './components/add-user/add-user.component';
import { BindingsdemoComponent } from './components/bindingsdemo/bindingsdemo.component';
import{NgclassdemoComponent} from './components/ngclassdemo/ngclassdemo.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'emp',component:EmployeeComponent},
  // {path:'emplist',component:EmployeeListComponent},
  {path:'form',component:ReactiveFormComponent},
  {path:'User',component:UserComponent},
  { path: 'AddUser', component: AddUserComponent }, 
  {path:'binding',component:BindingsdemoComponent},
  {path:'Ngstyle and Ngclass',component:NgclassdemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
