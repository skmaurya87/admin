import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { QuickFormComponent } from './quick-form/quick-form.component';
import { ErrorComponent } from './error/error.component';
import { AddressComponent } from './address/address.component';
import { MapComponent } from './map/map.component';
import { TeamComponent } from './team/team.component';
import {HttpClientModule} from '@angular/common/http';
import { HotleComponent } from './hotle/hotle.component';
import { MyPipePipe } from './pipe/my-pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialComponent } from './social/social.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { OwlModule } from 'angular-owl-carousel';
import { Form2Component } from './form2/form2.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('627974168493-tk3jge79819d3eut60lak8pldr7cls8b.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id')
  }
]);

// define routes
const route: Routes = [
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'services', component: ServicesComponent},
{path: 'social' , component: SocialComponent},
{path: 'contact', component: ContactComponent, children:[
  {path: 'quick-form', component: QuickFormComponent},
  {path: 'address', component: AddressComponent},
  {path: 'map', component: MapComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'form2' , component: Form2Component}
]},
{path: 'team', component: TeamComponent},
{path: 'hotle', component: HotleComponent},
{path: '**', component: ErrorComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    QuickFormComponent,
    ErrorComponent,
    AddressComponent,
    MapComponent,
    TeamComponent,
    HotleComponent,
    MyPipePipe,
    SocialComponent,
    Form2Component
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(route), HttpClientModule, ReactiveFormsModule, SocialLoginModule.initialize(config), OwlModule, MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
