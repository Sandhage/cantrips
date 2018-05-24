import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { SpawnPoolComponent } from "./spawn-pool/components/spawn-pool/spawn-pool.component";

export class CantripRouter {
  public static routes: Routes = [
    { path: 'spawn-pool', component: SpawnPoolComponent }
  ];

  public static ROUTING: ModuleWithProviders = RouterModule.forRoot(CantripRouter.routes);
}
