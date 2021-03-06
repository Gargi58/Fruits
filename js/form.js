class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(550, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(700,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'pink');
        this.button.position(750,500);
        this.button.style('width', '120px');
        this.button.style('height', '20px');
        this.button.style('background', 'green');
        this.reset.position(1205, 100);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'brown');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(500,300);
            this.greeting.style('color', 'Blue');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
            game.update(0);
            player.updateCount(0);
            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
        });

    }
}