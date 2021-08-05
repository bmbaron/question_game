import {generator} from './questionActionGenerator.js'

const layout = (() => {
    const gridContainer = document.getElementById('grid-container');

    const builder = () => {

        let start = document.getElementById('start-text');
        start.innerHTML = 'random'; 

        gridContainer.innerHTML = '';

        for(let i=1; i<4; i++) {
            let row = document.createElement('div');
            row.classList.add('row-' + i);
            for(let j=1; j<4; j++) {
                let div = document.createElement('div');
                div.classList.add('question');
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
                let answerRight = document.createElement('button');              

                setAnswerText(questions, key, answerLeft, answerRight);

                answerLeft.onclick = function () { checkAnswer(img.alt, this.innerText, this); };
                answerRight.onclick = function () { checkAnswer(img.alt, this.innerText, this); };


                let buttonBox = document.createElement('div');
                buttonBox.classList.add('buttonBox');
                buttonBox.append(answerLeft, answerRight);

                qBoxes[i].appendChild(buttonBox);

            }
            i++;
        }
    };
    const timer = ms => new Promise(res => setTimeout(res, ms));

    const checkAnswer = async (answer, choice, button) => {
        if (choice == answer)
        {
            button.style.background = "green";
        }
        else {
            button.style.background = "red";
        }

        await timer(1000);
        let box = button.parentNode;
        let question = box.parentNode;
        //boxToDelete[index].classList.toggle('flipped');
        //boxToDelete[index].classList.add("hidden");
        question.remove();
        return;
    };

    const setAnswerText = (questions, answer, left, right) => {
        

        let randomProperty = answer;
        while (randomProperty == answer) {
            randomProperty = Object.keys(questions)[Math.floor(Math.random()*Object.keys(questions).length)];
        }
        let randomNum = Math.floor(Math.random() * 2) + 1;
        console.log(randomNum, randomProperty);
        switch(randomNum)
        {
            case 1: 
                left.innerText = answer;
                right.innerText = randomProperty;
                break;
            case 2:
                right.innerText = answer;
                left.innerText = randomProperty;
                break;        
        }

    };



    return {
        builder,
        loadQuestions
    };
})();
  
  
  export {
    layout
  }
