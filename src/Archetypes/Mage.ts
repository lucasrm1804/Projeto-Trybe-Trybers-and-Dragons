import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private readonly _energy: EnergyType;
  private static mageInstance = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
  }
  
  static createdArchetypeInstances():number {
    this.mageInstance += 1;
    return this.mageInstance;
  }

  override get energyType(): EnergyType {
    return this._energy; 
  }
}

export default Mage;