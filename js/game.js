class Game {

    constructor(){
    }

getState()
{

        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){

        gameState = data.val();

        }
        )


}
// ball
// positio
// x/y

// gs.,pc,pl

//'/'== maindirectory=====game--> gamestate . ref(game/gameState).update
update(state){

database.ref('/').update({gameState:state})


}

start(){

if (gameState === 0){

player = new Player();
player.getCount()
form = new Form()
form.display();
}


}


}