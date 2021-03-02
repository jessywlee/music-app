window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ];
    //get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            //used function instead of arrow, to get access to this keyword!
            sounds[index].currentTime = 0; //reset current time to allow to click and play again and again
            sounds[index].play();

            createBubbles(index); //????
        });
    });

    //create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation= "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        }) //to remove the bubble element from HTML once the animation is done.
    }
}); //when the content is loaded, the function will run

