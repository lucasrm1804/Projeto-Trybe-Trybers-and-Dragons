import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private readonly _energy: EnergyType;
  private static rangerInstance = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
  }
  
  static createdArchetypeInstances():number {
    this.rangerInstance += 1;
    return this.rangerInstance;
  }

  override get energyType(): EnergyType {
    return this._energy; 
  }
}

export default Ranger;