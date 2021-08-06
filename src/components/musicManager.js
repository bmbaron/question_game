//https://opengameart.org/content/happy-sunset kenliten
// win sound by remaxim https://opengameart.org/content/win-sound-1
//lose sound: remaxim https://opengameart.org/content/bad-sound-1

import {Howl, Howler} from 'howler';

const musicManager = (() => {

    var allowedToPlay = true;

    var background = new Howl({
        src: ['../src/sounds/Happy_Sunset.wav'],
/*             sprite: {
            main: [2460, 8842, true]
        }, */
        autoplay: true,
        loop: 1,
        volume: 0.2
    });

    var win = new Howl({
        src: ['../src/sounds/win.wav'],
/*         sprite: {
            main: [0, 2000],
            volume: 2
        } */
    });

    var lose = new Howl({
        src: ['../src/sounds/lose.wav'],
/*         sprite: {
            main: [0, 2000],
            volume: 2
        } */
    });

    var randomQuestion = new Howl({
        src: ['https://actions.google.com/sounds/v1/water/air_woosh_underwater.ogg']
    });

    let music = document.getElementById('music');


    music.onclick = function () {
        if(music.children[0].innerText == 'music_note') {
            music.children[0].innerText = 'music_off';
            music.style.background = 'red';
            background.stop();
            allowedToPlay = false;
            return;
        }
        else {
            music.children[0].innerText = 'music_note';
            music.style.background = '#38d15e';
            background.play();
            allowedToPlay = true;
            return;
        }
    };      

    const questionSound = () => {                    
        if(allowedToPlay) {
            randomQuestion.play();
        }
    };

    const winSound = () => {   
        if(allowedToPlay) {
            win.play(); 
        }
    };

    const loseSound = () => {                    
        if(allowedToPlay) {
            lose.play(); 
        }
    };



    return {
        questionSound,
        winSound,
        loseSound

    };
})();
  
  
  export {
    musicManager
  }