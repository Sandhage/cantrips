import { Injectable } from '@angular/core';

/** Models */
import { NpcBits }    from   '../../models/npc-bits';
import { NpcClass }   from  '../../models/npc';

/** Services and Utilities */
import { MathUtilsService } from '../../services/math-utils.service';
import { StatGenerateService } from "./stat-generate.service";

@Injectable()
export class NpcGenerateService {
  constructor(
    private math: MathUtilsService,
    private npcStats: StatGenerateService
  ) {}

  public generateNpc(): NpcClass {
    let npc: NpcClass = new NpcClass(new NpcClass({
      name:       this.generateTwoNames(this.math.randomNum(3), this.math.randomNum(4)),
      race:       this.generateRace(),
      traits:     this.generateTraits(3)
    }));

    npc.attributes = this.npcStats.generateStats(npc.race);

    return npc;
  }

  public generateSingleName(syllables: number): string {
    syllables = syllables ? syllables : 1;

    if (syllables === 1) {
      return this.randomArrayItem(NpcBits.firstNamePart1);
    } else if (syllables === 2) {
      return this.randomArrayItem(NpcBits.firstNamePart1) + this.randomArrayItem(NpcBits.firstNamePart2)
    } else if (syllables === 3) {
      return this.randomArrayItem(NpcBits.firstNamePart1) + this.randomArrayItem(NpcBits.firstNamePart1) + this.randomArrayItem(NpcBits.firstNamePart2)
    }
  }

  public generateTwoNames(syllableFirst: number, syllableSecond: number): string {
    return this.generateSingleName(syllableFirst) + ' ' + this.generateSingleName(syllableSecond);
  }

  public generateRace(): string {
    return this.randomArrayItem(NpcBits.races);
  }

  public generateTraits(limit: number): Array<string> {
    const array = [];

    for (var i = 0; i < limit; i++) {
      array.push(this.composeTrait());
    }

    return array;
  }

  /** TODO: create pool of traits and adjectives to combine */

  private composeTrait(): string {
    let trait: string;

    trait = 'Has ' +
      this.randomArrayItem(NpcBits.adjectives) +
      ' ' +
      this.randomArrayItem(NpcBits.nouns)
      '.';

    return trait;
  }

  private randomArrayItem(array: Array<any>): any {
    return array[this.math.randomNum(array.length)];
  }
}
