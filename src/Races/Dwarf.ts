import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static dwarfInstances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  static createdRacesInstances() {
    this.dwarfInstances += 1;
    return this.dwarfInstances;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;