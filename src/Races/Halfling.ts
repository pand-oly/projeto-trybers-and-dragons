import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._countInstances += 1;
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return this._countInstances;
  }
}
