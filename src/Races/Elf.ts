import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static elfInstances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  static createdRacesInstances() {
    this.elfInstances += 1;
    return this.elfInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;