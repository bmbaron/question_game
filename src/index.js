import {generator} from './components/questionActionGenerator.js'
import {questionForm} from './components/questionForm.js'
import {categories} from './components/categories.js'


let counter = 0;

const mainModule = (() => {

    let arrow = document.getElementById('arrow');
    let category = document.getElementById('category');

    console.log(arrow);
    arrow.onclick = function () {

        if (counter == 0) {
            questionForm.attachQuestions(categories.foods);
            category.textContent = "foods";
        }

        if (counter == 1) {
            questionForm.attachQuestions(categories.animals);
            category.textContent = "animals";
            counter = counter - 2;
        }
        counter++;
    };

    generator.startButton.onclick = function (e) {
        console.log(generator.questionBoxes.length);
        if(generator.questionBoxes.length == 1)
        {
            document.getElementById('start-text').innerHTML = "play again";
        }
        if(generator.questionBoxes.length == 0)
        {
            location.reload();
        }
        else {
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

