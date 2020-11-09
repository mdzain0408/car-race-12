class Form {
    constructor() {
      
    }
  
    display(){
        // h1-h6  // DOM
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(520, 100);
      
      var input = createInput("Name");
      var button = createButton('Play');
      
      input.position(530, 250);
      button.position(590, 275);
  
      button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(130, 160)
      });
  
    }
  }