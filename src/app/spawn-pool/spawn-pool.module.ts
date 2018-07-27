import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/** Components */
import { SpawnPoolComponent } from './components/spawn-pool/spawn-pool.component';
import { NpcCardComponent } from './components/npc-card/npc-card.component';

/** Services and Utilities */
import { NpcGenerateService } from './services/npc-generate.service';
import { StatGenerateService} from "./services/stat-generate.service";

@NgModule({
  imports: [
    BrowserAnimationsModule,
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
  ],
  providers: [
    NpcGenerateService,
    StatGenerateService
  ]
})
export class SpawnPoolModule { }
