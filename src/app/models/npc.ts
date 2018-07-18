import { CharacterAttributes } from './attributes';
import { CharacterClass }      from './character';

export class NpcClass {
  attributes: CharacterAttributes;
  charClass:  CharacterClass;
  name:       string;
  notes?:     string;
  race:       string;
  traits:     string[];

  constructor(
    options?: {
      attributes?:   CharacterAttributes;
      charClass?:    CharacterClass;
      name?:        string;
      notes?:       string;
      race?:        string;
      traits?:      string[];
    }
  ) {
    this.charClass  = options && options.charClass  ? options.charClass   : new CharacterClass();
    this.attributes = options && options.attributes ? options.attributes  : new CharacterAttributes();
    this.name       = options && options.name       ? options.name        : 'BunBun';
    this.notes      = options && options.notes      ? options.notes       : '';
    this.race       = options && options.race       ? options.race        : 'Orc';
    this.traits     = options && options.traits     ? options.traits      : ['one', 'two', 'three'];
  }
}
