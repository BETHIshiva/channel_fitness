import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { PersonaltrainingComponent } from './personaltraining/personaltraining.component';
import { TrnsfermationComponent } from './trnsfermation/trnsfermation.component';
import { GrouptrainingComponent } from './grouptraining/grouptraining.component';
import { AboutComponent } from './about/about.component';
import { CarriersComponent } from './carriers/carriers.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
   {path:'services',component:ServicesComponent},
  //  {path:'programmes',component:ProgrammesComponent},
   {path:'persenal_training',component:PersonaltrainingComponent},
   {path:'transfermation_sessions',component:TrnsfermationComponent},
   {path:'group_traing',component:GrouptrainingComponent},
   {path:'about',component:AboutComponent},
   {path:'carriers',component:CarriersComponent},
   {path:'contact',component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
