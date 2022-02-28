import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { MenuDemoComponent } from './menu-demo/menu-demo.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';




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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
