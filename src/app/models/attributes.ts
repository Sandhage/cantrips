export class CharacterAttributes {
  charisma:     Attribute;
  constitution: Attribute;
  dexterity:    Attribute;
  intelligence: Attribute;
  strength:     Attribute;
  wisdom:       Attribute;

  constructor(options?: {
    charisma:     Attribute;
    constitution: Attribute;
    dexterity:    Attribute;
    intelligence: Attribute;
    strength:     Attribute;
    wisdom:       Attribute;
  }) {
    this.charisma     = options ? options.charisma      : new Attribute();
    this.constitution = options ? options.constitution  : new Attribute();
    this.dexterity    = options ? options.dexterity     : new Attribute();
    this.intelligence = options ? options.intelligence  : new Attribute();
    this.strength     = options ? options.strength      : new Attribute();
    this.wisdom       = options ? options.wisdom        : new Attribute();
  }

}

export class Attribute {
  base:     number;
  modifier: number;

  constructor(options?: {
    base: number
  }) {
    this.base = options && options.base ? options.base : 8;
    this.modifier = Math.floor( (this.base - 10) / 2 );
  }
}
