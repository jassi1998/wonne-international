import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import{ AnalgesicsComponent } from './productListing/analgesics/analgesics.component';
import{ OsteoporosisComponent } from './productListing/osteoporosis/osteoporosis.component';
import{ AllergicsComponent } from './productListing/allergics/allergics.component';
import{ AntimalarialComponent } from './productListing/antimalarial/antimalarial.component';
import{ AntibioticsComponent } from './productListing/antibiotics/antibiotics.component';
import{ CriticalCareComponent } from './productListing/critical-care/critical-care.component';
import{ DermatologyComponent } from './productListing/dermatology/dermatology.component';
import{ EenComponent } from './productListing/een/een.component';
import{ GastroenterologyComponent } from './productListing/gastroenterology/gastroenterology.component';
import{ HepatologyComponent} from './productListing/hepatology/hepatology.component';
import{ NeurologyComponent } from './productListing/neurology/neurology.component';
import{PediatricsComponent} from './productListing/pediatrics/pediatrics.component';
import{ SteroidsComponent } from './productListing/steroids/steroids.component';
import { GynaecologyComponent} from './productListing/gynaecology/gynaecology.component';
import{ DiabetologyComponent} from './productListing/diabetology/diabetology.component';
import{ NephrologyComponent } from './productListing/nephrology/nephrology.component';
import{ WonneIndiaComponent } from './wonne-india/wonne-india.component';
import{ WonneInternationalComponent } from './wonne-international/wonne-international.component';
const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full' },
  {path:'About', component: AboutComponent },
  {path:'Products', component: ProductsComponent },
  {path:'Contact', component: ContactComponent },
  {path:'Products/Analgesics', component: AnalgesicsComponent},
  {path:'Products/Osteoporosis', component: OsteoporosisComponent},
  {path:'Products/Allergics', component: AllergicsComponent},
  {path:'Products/Antibiotics', component: AntibioticsComponent},
  {path:'Products/Antimalarial', component: AntimalarialComponent},
  {path:'Products/Critical-care', component: CriticalCareComponent},
  {path:'Products/Dermatology', component: DermatologyComponent},
  {path:'Products/Een', component: EenComponent},
  {path:'Products/Gatroenterology', component: GastroenterologyComponent},
  {path:'Products/Hepatology', component: HepatologyComponent},
  {path:'Products/Neurology', component: NeurologyComponent},
  {path:'Products/Pediatrics', component: PediatricsComponent},
  {path:'Products/Steroids', component: SteroidsComponent},
  {path:'Products/Gynaecology', component: GynaecologyComponent},
  {path:'Products/Diabetology', component: DiabetologyComponent},
  {path:'Products/Nephrology', component: NephrologyComponent},
  {path:'Wonne-India',component: WonneIndiaComponent},
  {path:'Wonne-International', component: WonneInternationalComponent},
  {path:'404', component: HomeComponent},
  {path:'**', redirectTo: '/404'}
  // { path: '', redirectTo: 'Home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
