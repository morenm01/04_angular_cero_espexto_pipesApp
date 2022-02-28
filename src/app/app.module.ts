import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { MenuDemoComponent } from './menu-demo/menu-demo.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el locale de la app

import { registerLocaleData } from '@angular/common'; '@angular/common'

import localeEn from '@angular/common/locales/en'
registerLocaleData(localeEn);

import localeEs from '@angular/common/locales/es'
registerLocaleData( localeEs );
@NgModule({
  declarations: [
    AppComponent,
    MenuDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    PrimeNGModule,
    SharedModule,
    VentasModule

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
