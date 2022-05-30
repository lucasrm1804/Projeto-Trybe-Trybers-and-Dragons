import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static halflingInstances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  static createdRacesInstances() {
    this.halflingInstances += 1;
    return this.halflingInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;