const MainUI=
{
    cannon : document.querySelector("#cannon"),
    gameContainer: document.querySelector("#game-container"),
    spaceships : document.querySelectorAll(".spaceships"),


    //This moves one spaceship down
    moveSpaceship(valueToMoveBy,spaceShip)
    {
        spaceShip.style.marginTop=`${valueToMoveBy}px`;
    },

    moveCannon(valueToMoveBy)
    {
        this.cannon.style.marginLeft=`${valueToMoveBy}px`;
    },

    removeSpaceShip(spaceship)
    {
        spaceship.style.display="none";
    }


}

export default MainUI;