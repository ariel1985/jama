import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { RestProvider } from '../providers/rest/rest';
import { FormsModule } from '@angular/forms';

import { HomePage } from '../pages/home/home';
import { AddpersonPage } from '../pages/addperson/addperson';
import { EditpersonPage } from '../pages/editperson/editperson';

import { AgePipe } from '../pipes/age/age';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddpersonPage,
    EditpersonPage,
    AgePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddpersonPage,
    EditpersonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
