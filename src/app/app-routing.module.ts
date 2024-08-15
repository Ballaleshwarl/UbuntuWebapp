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
import { ResourceComponent } from './resource/resource.component';

const routes: Routes = [{path:'', component: LoginComponent, pathMatch:'full'},
  {path: 'home', component: HomeComponent},
{path:'signup',component:SignupComponent},
{path:'investigate', component:InvestigateComponent},
{path:'studio',component:StudioComponent},
{path:'pipeline',component:PipelineComponent},
{path:'respond',component:RespondComponent},
{path:'configure',component:ConfigureComponent},
{path:'resource', component:ResourceComponent},
{path:'**',redirectTo:''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
