import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamedesignComponent } from './pages/gamedesign/gamedesign.component';
import { BasezeroComponent } from './pages/game_design_pages/basezero/basezero.component';
import { HomeComponent } from './pages/home/home.component';
import { aboutComponent } from './pages/about/about.component';
import { ThreeddesignComponent } from './pages/threeddesign/threeddesign.component';
import { Ud4demoComponent } from './pages/game_design_pages/ud4demo/ud4demo.component';
import { JustforceComponent } from './pages/game_design_pages/justforce/justforce.component';
import { AsteroidsComponent } from './pages/game_design_pages/asteroids/asteroids.component';
import { AirbornerunComponent } from './pages/game_design_pages/airbornerun/airbornerun.component';
import { CgameengineComponent } from './pages/game_design_pages/cgameengine/cgameengine.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'game design',component:GamedesignComponent},
  {path:'3d design', component:ThreeddesignComponent},
  {path:'about', component:aboutComponent},
  {path:'basezero', component:BasezeroComponent},
  {path:'ud4demo', component:Ud4demoComponent},
  {path:'justforce', component:JustforceComponent},
  {path:'asteroids', component:AsteroidsComponent},
  {path:'airbornerun', component:AirbornerunComponent},
  {path:'cgameengine', component:CgameengineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
