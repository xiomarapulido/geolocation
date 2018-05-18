import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterComponent } from '../pages/register/register.component';
import { SearchComponent } from '../pages/search/search.component';
import { Geolocation } from '@ionic-native/geolocation'
import { GeolocationService } from './services/geolocation.service';
import { HttpClientModule } from '@angular/common/http';
import { PruebaProvider } from '../providers/prueba/prueba';

@NgModule({
  declarations: [
    MyApp,
    RegisterComponent,
    SearchComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,     
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterComponent,
    SearchComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GeolocationService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PruebaProvider
  ]
})
export class AppModule { }
