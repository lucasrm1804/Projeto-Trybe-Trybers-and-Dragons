import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static orcInstances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances() {
    this.orcInstances += 1;
    return this.orcInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;