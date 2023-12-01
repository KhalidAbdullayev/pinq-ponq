let ball;
let sc1=0;
let sc2=0;
let sc='';
let pr=0;
function setup() {
	new Canvas(500, 500);  
	ball = new Sprite();
	ball.diameter = 20;
	ball.friction = 0;
	ball.strokeWeight = 0;

	ball.vel.x = 5;

	player1 = new Sprite();
	player2= new Sprite();

	player1.width = 10;
	player1.height = 100;
	player2.width = 10;
	player2.height = 100;

	player1.y = 250;
	player2.y = 250;
	player1.x = 50;
	player2.x = 450;

	player1.collider = 'k';
	player2.collider = 'k';

	barrier1 = new Sprite();
	barrier2 = new Sprite();

	barrier1.width = 500;
	barrier1.height = 10;
	barrier2.width = 500;
	barrier2.height = 10;

	barrier1.y = 5;
	barrier2.y = 495;
	barrier1.x = 250;
	barrier2.x = 250;

	barrier1.collider = 'static';
	barrier2.collider = 'static';
	background(0);
}

function draw() {
	allSprites.draw();
	if (kb.pressing('w')) {
		player1.move(30, 'up', 4);
	} else if (kb.pressing('s')) {
		player1.move(30, 'down', 4);
	}
    if (kb.pressing('arrowUp')) {
		player2.move(30, 'up', 4);
	} else if (kb.pressing('arrowDown')) {
		player2.move(30, 'down', 4);
	}
	if (ball.collided(player1)) {
		ball.vel.x = 5;
	}
	if (ball.collided(player2)) {
		ball.vel.x = -5;
	}
	if(pr==0){
	if(ball.x<0){
		sc2++;
		pr=1;
	}
	if(ball.x>500){
		sc1++;
		pr=1;
	}
	}
	if (kb.pressing('space')) {
		if(ball.x<250){
			ball.vel.x = 5;
		}
		else{
			ball.vel.x = -5;
		}
		ball.x=250;
		ball.y=250;
		ball.vel.y = 0;
		pr=0;
	}
	if (kb.pressing('P')) {
	sc1=0;
	sc2=0;
	}
	background(0, 0, 0, 30);
	textSize(22);
	fill('yellow');
	sc=sc1+':'+sc2
	text(sc, 6, 20);
}
