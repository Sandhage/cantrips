import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';

/** Components */
import { AppComponent } from './app.component';

/** Modules and Routers */
import { CantripRouter }    from './app.routing';
import { SpawnPoolModule }  from './spawn-pool/spawn-pool.module';

/** Services and Utilities */
import { MathUtilsService } from './services/math-utils.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CantripRouter.ROUTING,
    SpawnPoolModule
  ],
  providers: [
    MathUtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
