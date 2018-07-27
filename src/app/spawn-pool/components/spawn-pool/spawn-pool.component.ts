import { Component, OnInit } from '@angular/core';
import { NpcClass } from '../../../models/npc';
import * as _ from 'lodash';

/** Services and Utilites */
import { MathUtilsService } from '../../../services/math-utils.service';
import { NpcGenerateService } from '../../services/npc-generate.service';

@Component({
  selector: 'spawn-pool',
  templateUrl: './spawn-pool.component.html',
  styleUrls: ['./spawn-pool.component.scss']
})
export class SpawnPoolComponent implements OnInit {
  npcs: NpcClass[] = [];

  constructor(
    private math: MathUtilsService,
    private npcGenerate: NpcGenerateService
  ) { }

  ngOnInit() {
    this.spawnNpc();
  }

  cullNpc(npc: NpcClass): void {
    this.npcs = _.pull(this.npcs, npc);
  }

  spawnNpc(): void {
    this.npcs.push(this.npcGenerate.generateNpc());
  }
}
