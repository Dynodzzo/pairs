import { GameState } from "./app/states/game.state";

export class PhaserGame {
	game: Phaser.Game;

	constructor() {
		this.game = new Phaser.Game(960, 544, Phaser.AUTO, 'phaser-container', {
			preload: this.preload,
			create: this.create,
			update: this.update
		});
	}

	preload() {

	}

	create() {
		this.game.state.add('GameState', GameState, true);
	}

	update() {
		
	}
}

let game = new PhaserGame();