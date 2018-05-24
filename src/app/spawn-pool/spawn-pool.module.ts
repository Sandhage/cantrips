import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatListModule } from '@angular/material';

import { SpawnPoolComponent } from './components/spawn-pool/spawn-pool.component';
import { NpcCardComponent } from './components/npc-card/npc-card.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatListModule
  ],
  declarations: [
    SpawnPoolComponent,
    NpcCardComponent
  ],
  exports: [
    SpawnPoolComponent
  ]
})
export class SpawnPoolModule { }
