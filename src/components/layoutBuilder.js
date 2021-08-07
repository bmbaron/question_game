import { musicManager } from './musicManager.js';
import { generator } from './questionActionGenerator.js';

const layout = (() => {
    
    const mainContainer = document.getElementById('main-container');
    const gridContainer = document.getElementById('grid-container');

    const homePage = () => {

    
        let title = document.createElement('h1'); 
        title.innerText = "What is it?";
        title.classList.add('title');
        title.id = 'title';

        let description = document.createElement('p'); 
        description.innerHTML = "practice English vocabulary <br> level: <strong>beginner</strong>";
        description.classList.add('description');
        description.id = 'description';

        mainContainer.appendChild(title, gridContainer);
        mainContainer.appendChild(description); 

    };


    const builder = () => {

        let start = document.getElementById('start-text');
        start.innerHTML = 'random'; 
        
        if(typeof mainContainer.children[3] !== 'undefined') {
            mainContainer.children[3].remove();
            mainContainer.children[2].remove();

        }
        //mainContainer.children[3].remove();
        //document.getElementById('description').remove();

        gridContainer.innerHTML = '';

        for(let i=1; i<4; i++) {
            let row = document.createElement('div');
            row.classList.add('row-' + i);
            for(let j=1; j<4; j++) {
                let div = document.createElement('div');
                div.classList.add('question');

                div.onclick = function(e) {
                    if(generator.questionBoxes.length == 1)
                    {
                        start.innerHTML = "play again";
                    }
                    if(generator.questionBoxes.length == 0)
                    {   
                        layout.builder();
                        categoryClick();
                    }
                    else {
                        musicManager.questionSound();
                        generator.clickQuestion(this);
                    }
                };
                let h1 = document.createElement('h1');

                switch(i) {
                    case 1:
                        h1.innerHTML = j;
                        break;
                    case 2:
                        h1.innerHTML = j+3;
                        break;
                    case 3:
                        h1.innerHTML = j+6;
                        break;
                }
                div.appendChild(h1);
                row.appendChild(div);
            }
            gridContainer.appendChild(row);              
        }
    };

    let qBoxes = document.getElementsByClassName("question");
    
    const loadQuestions = (questions) => {

        let i = 0;

        for (let value of Object.values(questions)) {
            //qBoxes[i].textContent = '';
            //document.querySelectorAll('.question p')[0].innerHTML = '';
            //console.log("We need to delete: " + document.querySelectorAll('.question p')[0].innerHTML);
            if(typeof qBoxes[i] != 'undefined')
            {
                //qBoxes[i].children[1].remove();

                 /* let questionText = String(value);
                let qText = document.createElement('p');
                qText.innerHTML = questionText;
                qBoxes[i].appendChild(qText); */
                let img = document.createElement('img');
                //console.log(value);
                img.src = value;
                var key = Object.keys(questions).filter(function(key) {return questions[key] === value})[0];
                img.alt = key;

                qBoxes[i].appendChild(img);

                let answerLeft = document.createElement('button');
                let answerMiddle = document.createElement('button');              
                let answerRight = document.createElement('button');              

                setAnswerText(questions, key, answerLeft, answerMiddle, answerRight);

                answerLeft.onclick = function () {
                    this.disabled = true;
                    answerRight.disabled = true;
                    answerMiddle.disabled = true;
                    checkAnswer(img.alt, this.innerText, this); 
                };
                answerMiddle.onclick = function () {
                    this.disabled = true;
                    answerLeft.disabled = true;
                    answerRight.disabled = true;
                    checkAnswer(img.alt, this.innerText, this);
                };
                answerRight.onclick = function () {
                    this.disabled = true;
                    answerLeft.disabled = true;
                    answerMiddle.disabled = true;
                    checkAnswer(img.alt, this.innerText, this);
                };


                let buttonBox = document.createElement('div');
                buttonBox.classList.add('buttonBox');
                buttonBox.append(answerLeft, answerMiddle, answerRight);

                qBoxes[i].appendChild(buttonBox);

            }
            i++;
        }
    };
    const timer = ms => new Promise(res => setTimeout(res, ms));

    const checkAnswer = async (answer, choice, button) => {
        if (choice == answer)
        {
            musicManager.winSound();
            button.style.background = "#38d15e";
        }
        else {
            musicManager.loseSound();
            button.style.background = "red";
        }

        await timer(1000);
        let box = button.parentNode;
        let question = box.parentNode;
        //boxToDelete[index].classList.toggle('flipped');
        //boxToDelete[index].classList.add("hidden");
        question.remove();
        generator.toggleAnswered();
        return;
    };

    const setAnswerText = (questions, answer, left, middle, right) => {
        

        let randomProperty1 = answer;
        let randomProperty2 = answer;

        while (randomProperty1 == answer) {
            randomProperty1 = Object.keys(questions)[Math.floor(Math.random()*Object.keys(questions).length)];
        }
        while (randomProperty2 == answer) {
            randomProperty2 = Object.keys(questions)[Math.floor(Math.random()*Object.keys(questions).length)];
            if(randomProperty1 == randomProperty2) {
                randomProperty2 = answer;
            }
        }
        

        let randomNum = Math.floor(Math.random() * 3) + 1;

        switch(randomNum)
        {
            case 1: 
                left.innerText = answer;
                right.innerText = randomProperty1;
                middle.innerText = randomProperty2;

                break;
            case 2:
                middle.innerText = answer;
                left.innerText = randomProperty1;
                right.innerText = randomProperty2;
                break;        
            case 3:
                right.innerText = answer;
                left.innerText = randomProperty1;
                middle.innerText = randomProperty2;
                break;    
        }

    };



    return {
        homePage,
        builder,
        loadQuestions
    };
})();
  
  
  export {
    layout
  }
