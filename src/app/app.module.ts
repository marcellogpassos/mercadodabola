import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { LoginPageModule } from "../pages/login/login.module";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PartidaPage } from '../pages/partida/partida';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { TimesServiceProvider } from '../providers/times-service/times-service';
import { RodadasServiceProvider } from '../providers/rodadas-service/rodadas-service';
import { PartidasServiceProvider } from '../providers/partidas-service/partidas-service';
import { TermometroComponent } from '../components/termometro/termometro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PartidaPage,
    TermometroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PartidaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    TimesServiceProvider,
    RodadasServiceProvider,
    PartidasServiceProvider
  ]
})
export class AppModule {}
