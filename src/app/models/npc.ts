export class NpcClass {
  charClass?: CharacterClass;
  name:   string;
  race:   string;
  notes:  string;


  constructor(
    options: {
      name?:  string;
      race?:  string;
      notes?: string;
      charClass: CharacterClass;
    }
  ) {
    this.name  = options && options.name   ? options.name  : 'BunBun';
    this.race  = options && options.race   ? options.race  : 'halfOrc';
    this.notes = options && options.notes  ? options.notes : '';
    this.charClass = new CharacterClass(options.charClass);
  }
}

export class CharacterClass {
  className:  string;
  subClass:   string;

  constructor(
    options: {
      className?: string;
      subClass?:  string;
    }
  ) {
    this.className =  options.className;
    this.subClass  =  options.subClass;
  }
}
