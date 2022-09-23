import ArcheType from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends ArcheType {
  private _energyType: EnergyType;
  private static _countInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._countInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._countInstances;
  }

  get energyType(): EnergyType { return this._energyType; }
}
