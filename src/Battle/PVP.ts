import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  fight(): number {
    if (this.player1.strength <= this.player2.defense
      && this.player2.strength <= this.player1.defense) {
      return 0; // 0 caso empate - assim não da loop infinito no while abaixo
    }
    while (this.player1.lifePoints > -1 && this.player2.lifePoints > -1) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return super.fight(); // usar pra checar resultado mais tarde.... //?talvez
  }
}