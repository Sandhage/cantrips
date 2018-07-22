import { Component, Input, OnInit } from '@angular/core';

/** Models */
import { NpcClass } from '../../../models/npc';

@Component({
  selector: 'npc-card',
  templateUrl: './npc-card.component.html',
  styleUrls: ['./npc-card.component.scss']
})
export class NpcCardComponent implements OnInit {
  @Input() npc: NpcClass;

  constructor() { }

  ngOnInit() { }

}
