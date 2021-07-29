import {questionForm} from './components/questionForm.js'
import {generator} from './components/questionActionGenerator.js'

let json;
let form = questionForm.myForm;
let button = questionForm.submitButton;

const mainModule = (() => {


    button.onclick = function(e) {
      e.preventDefault();
    
      let formData = new FormData(form);
      let questions = {};
      formData.forEach(function(value, key){
          questions[key] = value;
      });
      attachQuestions(questions);
    };

    const attachQuestions = (questions) => {
        //generator.questions[0].childNodes[3].innerHTML = (json[0]);
        for (let value of Object.values(questions)) {
            let i = 0;
            //console.log(generator.questionBoxes[i].childNodes[3].innerHTML + value);
            let questionText = String(value);
            generator.updateQuestion(questionText);
            //let fuckingBox = document.getElementById("0");
            //fuckingBox.childNodes[3].innerHTML = questionText;
            //alert(fuckingBox.childNodes[3].innerHTML)
            //generator.questionBoxes[i].childNodes[3].innerHTML = questionText;
            //console.log(generator.questionBoxes[i].childNodes[3].innerHTML);
            i++;
        }
    };

    generator.startButton.onclick = function () 
    {
        generator.chooseQuestion();
    };

  })();

