export class GameState extends Phaser.State {
	game: Phaser.Game;
	textStyle: Object;
	text: Phaser.Text;

	constructor(game: Phaser.Game) {
		super();
		this.game = game;
	}

	preload() {
		
	}

	create() {
		this.textStyle = {
			font: '18px Arial',
			fill: '#F0F0F0'
		};
		this.text = this.game.add.text(50, 50, 'Hello', this.textStyle);
	}

	update() {
		
	}
}