import { Injectable } from '@angular/core';

/** Models */
import { Attribute, CharacterAttributes }  from '../../models/attributes';

/** Services and Utilites */
import {MathUtilsService} from "../../services/math-utils.service";

@Injectable()
export class StatGenerateService {
  constructor(private math: MathUtilsService) {}

  public generateStats(race: string): CharacterAttributes {
    switch (race) {
      case 'HUMAN':       return this.generateHumanStats();
      case 'DRAGONBORN':  return this.generateDragonbornStats();
      case 'ELF':         return this.generateElfStats();
      case 'HALF-ELF':    return this.generateHalfElfStats();
      case 'HALFLING':    return this.generateHalflingStats();
      case 'HALF-ORC':    return this.generateHalfOrcStats();
      case 'GNOME':       return this.generateGnomeStats();
      case 'DWARF':       return this.generateDwarfStats();
      case 'TIEFLING':    return this.generateTieflingStats();
    }
  }

  private generateAttribute(add?: number): Attribute {
    let bonus = add ? add : 0;

    return new Attribute({ base: this.math.randomNum(15, 8) + bonus});
  }

  private generateHumanStats(): CharacterAttributes {
    let stats: CharacterAttributes = new CharacterAttributes({
      constitution: this.generateAttribute(1),
      dexterity:    this.generateAttribute(1),
      strength:     this.generateAttribute(1),
      charisma:     this.generateAttribute(1),
      intelligence: this.generateAttribute(1),
      wisdom:       this.generateAttribute(1)
    });

    return stats;
  }

  private generateTieflingStats(): CharacterAttributes {
    let stats: CharacterAttributes = new CharacterAttributes({
      constitution: this.generateAttribute(),
      dexterity:    this.generateAttribute(),
      strength:     this.generateAttribute(),
      charisma:     this.generateAttribute(2),
      intelligence: this.generateAttribute(1),
      wisdom:       this.generateAttribute()
    })

    return stats;
  }

  private generateGnomeStats(): CharacterAttributes {
    let stats: CharacterAttributes = new CharacterAttributes({
      constitution: this.generateAttribute(),
      dexterity:    this.generateAttribute(1),
      strength:     this.generateAttribute(),
      charisma:     this.generateAttribute(),
      intelligence: this.generateAttribute(2),
      wisdom:       this.generateAttribute()
    })

    return stats;
  }

  private generateDwarfStats(): CharacterAttributes {
    let stats: CharacterAttributes = new CharacterAttributes({
      constitution: this.generateAttribute(2),
      dexterity:    this.generateAttribute(),
      strength:     this.generateAttribute(1),
      charisma:     this.generateAttribute(),
      intelligence: this.generateAttribute(),
      wisdom:       this.generateAttribute()
    })

    return stats;
  }

  private generateDragonbornStats(): CharacterAttributes {
    let stats: CharacterAttributes = new CharacterAttributes({
      constitution: this.generateAttribute(),
      dexterity:    this.generateAttribute(),
      strength:     this.generateAttribute(2),
      charisma:     this.generateAttribute(1),
      intelligence: this.generateAttribute(),
      wisdom:       this.generateAttribute()
    })

    return stats;
  }

  private generateElfStats(): CharacterAttributes {
    let stats: CharacterAttributes = new CharacterAttributes({
      constitution: this.generateAttribute(),
      dexterity:    this.generateAttribute(2),
      strength:     this.generateAttribute(),
      charisma:     this.generateAttribute(),
      intelligence: this.generateAttribute(),
      wisdom:       this.generateAttribute(1)
    })

    return stats;
  }

  private generateHalfOrcStats(): CharacterAttributes {
    let stats: CharacterAttributes = new CharacterAttributes({
      constitution: this.generateAttribute(1),
      dexterity:    this.generateAttribute(),
      strength:     this.generateAttribute(2),
      charisma:     this.generateAttribute(),
      intelligence: this.generateAttribute(),
      wisdom:       this.generateAttribute()
    })

    return stats;
  }

  private generateHalflingStats(): CharacterAttributes {
    let stats: CharacterAttributes = new CharacterAttributes({
      constitution: this.generateAttribute(),
      dexterity:    this.generateAttribute(2),
      strength:     this.generateAttribute(),
      charisma:     this.generateAttribute(1),
      intelligence: this.generateAttribute(),
      wisdom:       this.generateAttribute()
    })

    return stats;
  }

  private generateHalfElfStats(): CharacterAttributes {
    let stats: CharacterAttributes = new CharacterAttributes({
      constitution: this.generateAttribute(),
      dexterity:    this.generateAttribute(),
      strength:     this.generateAttribute(),
      charisma:     this.generateAttribute(2),
      intelligence: this.generateAttribute(1),
      wisdom:       this.generateAttribute(1)
    })

    return stats;
  }

}
