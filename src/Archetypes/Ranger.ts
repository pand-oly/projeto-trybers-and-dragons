import ArcheType from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends ArcheType {
  private _energyType: EnergyType;
  private static _countInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._countInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._countInstances;
  }

  get energyType(): EnergyType { return this._energyType; }
}
