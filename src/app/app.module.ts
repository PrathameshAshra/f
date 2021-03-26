import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { UspComponent } from './components/usp/usp.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingPageComponent,
    RecommendationComponent,
    UspComponent,
    HeroComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
