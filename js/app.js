import MainUI from "./UIO/MainUI.js";

const app=
{
        init()
        {

            let moveRight=0;
            let marginPx=0;
            //event listeners

              const interalRef= setInterval(function(){

                marginPx+=10;

                MainUI.moveSpaceship(marginPx,MainUI.spaceships[0]);  
                MainUI.moveSpaceship(marginPx,MainUI.spaceships[1]); 
                MainUI.moveSpaceship(marginPx,MainUI.spaceships[2]);  
                MainUI.moveSpaceship(marginPx,MainUI.spaceships[3]); 
                MainUI.moveSpaceship(marginPx,MainUI.spaceships[4]); 
                
                
                const spaceship1Rect = MainUI.spaceships[0].getBoundingClientRect();
                const cannonRect = MainUI.cannon.getBoundingClientRect();

                if(spaceship1Rect.bottom>=cannonRect.top)
                {
                    clearInterval(interalRef);
                }
                console.log("spaceship",spaceship1Rect);
                console.log("cannon",cannonRect);


            },30); 

            document.addEventListener("keydown",function(event){

                switch(event.key)
                {
                    case "ArrowLeft" :
                        moveRight-=10;
                        MainUI.moveCannon(moveRight);
                    break;

                    case "ArrowRight" :
                        moveRight+=10;
                        MainUI.moveCannon(moveRight)
                    break;

                    case " " :
                    break;

                }
              
            });
            

            //Event bubbling 
            MainUI.gameContainer.addEventListener("click",function(event){

                const element  = event.target;

               if(element.className=="spaceships")
               {
                MainUI.removeSpaceShip(element);
               }

    
            });


        }

}

app.init();


