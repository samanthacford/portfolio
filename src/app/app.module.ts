import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { GamedesignComponent } from './pages/gamedesign/gamedesign.component';
import { ThreeddesignComponent } from './pages/threeddesign/threeddesign.component';
import { aboutComponent } from './pages/about/about.component';
import { BasezeroComponent } from './pages/game_design_pages/basezero/basezero.component';
import { GridElementComponent } from './componentTemplates/grid-element/grid-element.component';
import { CarouselElementComponent } from './componentTemplates/carousel-element/carousel-element.component';
import { CarouselBioElementComponent } from './componentTemplates/carousel-bio-element/carousel-bio-element.component';
import { ModalGridElementComponent } from './componentTemplates/modal-grid-element/modal-grid-element.component';
import { SafePipeComponent } from './componentTemplates/safe-pipe/safe-pipe.component';
import { IconGridElementComponent } from './componentTemplates/icon-grid-element/icon-grid-element.component';
import { Ud4demoComponent } from './pages/game_design_pages/ud4demo/ud4demo.component';
import { JustforceComponent } from './pages/game_design_pages/justforce/justforce.component';
import { AsteroidsComponent } from './pages/game_design_pages/asteroids/asteroids.component';
import { AirbornerunComponent } from './pages/game_design_pages/airbornerun/airbornerun.component';
import { CgameengineComponent } from './pages/game_design_pages/cgameengine/cgameengine.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GamedesignComponent,
    ThreeddesignComponent,
    aboutComponent,
    BasezeroComponent,
    GridElementComponent,
    CarouselElementComponent,
    CarouselBioElementComponent,
    ModalGridElementComponent,
    SafePipeComponent,
    IconGridElementComponent,
    Ud4demoComponent,
    JustforceComponent,
    AsteroidsComponent,
    AirbornerunComponent,
    CgameengineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
