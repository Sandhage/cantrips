import { Component, OnInit } from '@angular/core';

/** Models */
import { NpcClass } from '../../../models/npc';

/** Services */
import { MathUtilsService } from '../../../services/math-utils.service';
import { NpcGenerateService } from '../../services/npc-generate.service';

@Component({
  selector: 'npc-card',
  templateUrl: './npc-card.component.html',
  styleUrls: ['./npc-card.component.scss']
})
export class NpcCardComponent implements OnInit {
  npc: NpcClass = new NpcClass({
    name:   this.npcGenerate.generateTwoNames(this.math.randomNum(3), this.math.randomNum(4)),
    race:   this.npcGenerate.generateRace(),
    traits: this.npcGenerate.generateTraits(3)
  });

  constructor(
    private math: MathUtilsService,
    public  npcGenerate: NpcGenerateService
  ) { }

  ngOnInit() { }

}
