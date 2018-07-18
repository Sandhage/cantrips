export class CharacterClass {
  className:  string;
  subClass:   string;

  constructor(
    options?: {
      className: string;
      subClass:  string;
    }
  ) {
    this.className =  options ? options.className : 'Nerd';
    this.subClass  =  options ? options.subClass  : 'Dork';
  }
}

export class BaseFeature {
  featureName:        string;
  featureDescription: string;

  constructor(options?: {
    featureName:        string,
    featureDescription: string
  }) {
    this.featureName        = options ? options.featureName         : 'N/A';
    this.featureDescription = options ? options.featureDescription  : 'N/A';
  }
}

export class TrackableFeature extends BaseFeature {

}
