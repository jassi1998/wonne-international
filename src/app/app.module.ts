import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnalgesicsComponent } from './productListing/analgesics/analgesics.component';
import { OsteoporosisComponent } from './productListing/osteoporosis/osteoporosis.component';
import { AllergicsComponent } from './productListing/allergics/allergics.component';
import { AntibioticsComponent } from './productListing/antibiotics/antibiotics.component';
import { PediatricsComponent } from './productListing/pediatrics/pediatrics.component';
import { GastroenterologyComponent } from './productListing/gastroenterology/gastroenterology.component';
import { CriticalCareComponent } from './productListing/critical-care/critical-care.component';
import { GynaecologyComponent } from './productListing/gynaecology/gynaecology.component';
import { DermatologyComponent } from './productListing/dermatology/dermatology.component';
import { NeurologyComponent } from './productListing/neurology/neurology.component';
import { SteroidsComponent } from './productListing/steroids/steroids.component';
import { DiabetologyComponent } from './productListing/diabetology/diabetology.component';
import { HepatologyComponent } from './productListing/hepatology/hepatology.component';
import { AntimalarialComponent } from './productListing/antimalarial/antimalarial.component';
import { EenComponent } from './productListing/een/een.component';
import { NephrologyComponent } from './productListing/nephrology/nephrology.component';
import { WonneIndiaComponent } from './wonne-india/wonne-india.component';
import { WonneInternationalComponent } from './wonne-international/wonne-international.component';
import {APP_BASE_HREF} from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    AnalgesicsComponent,
    OsteoporosisComponent,
    AllergicsComponent,
    AntibioticsComponent,
    PediatricsComponent,
    GastroenterologyComponent,
    CriticalCareComponent,
    GynaecologyComponent,
    DermatologyComponent,
    NeurologyComponent,
    SteroidsComponent,
    DiabetologyComponent,
    HepatologyComponent,
    AntimalarialComponent,
    EenComponent,
    NephrologyComponent,
    WonneIndiaComponent,
    WonneInternationalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
