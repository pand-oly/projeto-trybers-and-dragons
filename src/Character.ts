import ArcheType, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

const generateRandomStatus = (): number => Math.floor(Math.random() * (11 - 2));

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: ArcheType;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = generateRandomStatus();
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = generateRandomStatus();
    this._defense = generateRandomStatus();
    this._energy = { type_: this._archetype.energyType,
      amount: generateRandomStatus() };
  }
}
