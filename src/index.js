import {generator} from './components/questionActionGenerator.js'
import {categories} from './components/categories.js'
import {layout} from './components/layoutBuilder.js'
import { musicManager } from './components/musicManager.js';


const mainModule = (() => {

    let arrow = document.getElementById('arrow');
    let category = document.getElementById('category');
    let color = document.getElementsByTagName("BODY")[0];
    let counter = 0;
    
    window.addEventListener("load", function(){
        document.getElementById('start-button').style.visibility = 'hidden';
        layout.builder();
    });



    arrow.onclick = function () {
        document.getElementById('start-button').style.visibility = 'visible'; 
        layout.builder();
        categoryClick();

    };

    const categoryClick = () => {
        if (counter == 0) {
            layout.loadQuestions(categories.foods);
            category.textContent = "foods";
            color.style.background = "#EE8609";
        }

        if (counter == 1) {
            layout.loadQuestions(categories.animals);
            category.textContent = "animals";
            color.style.background = "#4a38d1";
        }
        if (counter == 2) {
            layout.loadQuestions(categories.places);
            category.textContent = "places";
            counter = counter - 3;
            color.style.background = "#e82788"; 
        }
        counter++;
    };


    generator.startButton.onclick = function (e) {
        if(generator.questionBoxes.length == 1)
        {
            document.getElementById('start-text').innerHTML = "play again";
        }
        if(generator.questionBoxes.length == 0)
        {   
            layout.builder();
            categoryClick();
        }
        else {
            musicManager.questionSound();
            generator.chooseQuestion();
        }
    };
/* 

    button.onclick = function(e) {
      e.preventDefault();
    
      let formData = new FormData(form);
      let questions = {};

      formData.forEach(function(value, key){
          questions[key] = value;
      });
      attachQuestions(questions);

      var json = JSON.stringify(questions);
      console.log(json);
    };

    const attachQuestions = (questions) => {
        //generator.questions[0].childNodes[3].innerHTML = (json[0]);

        let qBoxes = document.getElementsByClassName("question");
        console.log(qBoxes);
        console.log(Object.values(questions));

        let i = 0;
        for (let value of Object.values(questions)) {
            let questionText = String(value);
            console.log(qBoxes[i]);
            let qText = document.createElement('p');
            qText.innerHTML = questionText;
            qBoxes[i].appendChild(qText);
            console.log("final element text is: " + qBoxes[i].innerHTML);
    
            i++;
        }
    }; */



  })();

