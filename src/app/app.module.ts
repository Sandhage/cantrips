import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';
import { SpawnPoolModule }  from './spawn-pool/spawn-pool.module';

import { CantripRouter }    from './app.routing';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CantripRouter.ROUTING,
    SpawnPoolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
