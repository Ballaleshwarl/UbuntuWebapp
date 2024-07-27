import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { InvestigateComponent } from './investigate/investigate.component';
import { StudioComponent } from './studio/studio.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { RespondComponent } from './respond/respond.component';
import { ConfigureComponent } from './configure/configure.component';
import { authGuard } from './auth.guard';


const routes: Routes = [{path:'', component: LoginComponent, pathMatch:'full'},
  {path: 'home', component: HomeComponent,
   canActivate:[authGuard]
  },
{path:'signup',component:SignupComponent},
{path:'investigate', component:InvestigateComponent,canActivate:[authGuard]},
{path:'studio',component:StudioComponent ,canActivate:[authGuard]},
{path:'pipeline',component:PipelineComponent,canActivate:[authGuard]},
{path:'respond',component:RespondComponent,canActivate:[authGuard]},
{path:'configure',component:ConfigureComponent,canActivate:[authGuard]},
{path:'**',redirectTo:''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
