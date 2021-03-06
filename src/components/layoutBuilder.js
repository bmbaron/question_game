import { musicManager } from './musicManager.js';
import { generator } from './questionActionGenerator.js';

const layout = (() => {
    
    const mainContainer = document.getElementById('main-container');
    const gridContainer = document.getElementById('grid-container');
    const pointBox = document.getElementById('point-box');
    let numberAnswered = 0;
    let numberCorrect = 0;
    let numberWrong = 0;
    let wordsToReview = [];

    let foodsFinished = false;
    let animalsFinished = false;
    let placesFinished = false;

    let foodsResultText = '';
    let animalsResultText = '';
    let placesResultText = '';

    let foodsPerfect = false;
    let animalsPerfect = false;
    let placesPerfect = false;

    const getResults = () => {
        let category = document.getElementById('category');
        let categoryName = category.textContent;

        if (categoryName.indexOf('foods') !== -1) {
            foodsFinished = true;
            foodsResultText = 'foods: ' + numberCorrect + '/9 correct';
            console.log(foodsFinished, foodsResultText);
            if(numberCorrect == 9) {
                setPerfect('foods');
                if (foodsPerfect && animalsPerfect && placesPerfect) {
                    return ('WOW!!! You got all 27 words correct! You are an English pro!')
                }
                else {
                    return ('Great job! You know a lot of foods!');
                }
            }
            else {
                return ('You know ' + numberCorrect + ' of the foods.<br><br>words to practice:<br>' + wordsToReview);
            }
        }
        else if (categoryName.indexOf('animals') !== -1) {
            animalsFinished = true;
            animalsResultText = 'animals: ' + numberCorrect + '/9 correct';
            console.log(animalsFinished, animalsResultText);
            if(numberCorrect == 9) {
                setPerfect('animals');
                if (foodsPerfect && animalsPerfect && placesPerfect) {
                    return ('WOW!!! You got all 27 words correct! You are an English pro!')
                }
                else {
                    return ('Great job! You know a lot of animals!');
                }
            }
            else {
                return ('You know ' + numberCorrect + ' of the animals.<br><br>words to practice:<br>' + wordsToReview);
            }
        }
        else if (categoryName.indexOf('places') !== -1) {
            placesFinished = true;
            placesResultText = 'places: ' + numberCorrect + '/9 correct';
            console.log(placesFinished, placesResultText);
            if(numberCorrect == 9) {
                setPerfect('places');
                if (foodsPerfect && animalsPerfect && placesPerfect) {
                    return ('WOW!!! You got all 27 words correct! You are an English pro!')
                }
                else {
                    return ('Great job! You know a lot of places!');
                }            }
            else {
                return ('You know ' + numberCorrect + ' of the places.<br><br>words to practice:<br>' + wordsToReview);
            }
        }



    }

    const getCategoryFinishedStatus = (categ) => {

        if(categ == 'foods') {
            return (foodsFinished);
        }
        else if(categ == 'animals') {
            return (animalsFinished);
        }
        else if(categ == 'places') {
            return (placesFinished);
        }

    };

    const getCategoryResultText = (categ) => {
        if(categ == 'foods') {
            return (foodsResultText);
        }
        else if(categ == 'animals') {
            return (animalsResultText);
        }
        else if(categ == 'places') {
            return (placesResultText);
        }
    };

    const setPerfect = (categ) => {
        if(categ == 'foods') {
            foodsPerfect = true;
        }
        else if(categ == 'animals') {
            animalsPerfect = true;
        }
        else if(categ == 'places') {
            placesPerfect = true;
        }
    };

    const homePage = () => {

    
        let title = document.createElement('h1'); 
        title.innerText = "What is it?";
        title.classList.add('title');
        title.id = 'title';

        let description = document.createElement('p'); 
        description.innerHTML = "<span id='practice'>practice English vocabulary</span> <br><br> level: <span id='level'>beginner</span>";
        description.classList.add('description');
        description.id = 'description';

        mainContainer.appendChild(title);
        mainContainer.appendChild(description);

        document.getElementById('practice').style.fontSize = '2rem';
        document.getElementById('level').style.color = 'red';

    };

    const resultsPage = () => {

    
        let title = document.createElement('h1'); 
        title.innerText = "Game Over";
        title.classList.add('title');
        title.id = 'title';

        let description = document.createElement('p'); 
        description.innerHTML = getResults();
        description.classList.add('description');
        description.id = 'description';

        mainContainer.classList.remove('no-background');
        mainContainer.appendChild(title);
        mainContainer.appendChild(description);

        while (pointBox.firstChild) {
            pointBox.removeChild(pointBox.firstChild);
        }

    };


    const builder = () => {
        numberAnswered = 0;
        numberCorrect = 0;
        mainContainer.classList.add('no-background');


        while (pointBox.firstChild) {
            pointBox.removeChild(pointBox.firstChild);
        }

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

                    if (this.classList.contains('flipped')) {
                        return;
                    }
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
        for (let i=1; i<10; i++) {
            let dot = document.createElement('div');
            dot.classList.add('dot');
            dot.id = 'point' + i;
            pointBox.appendChild(dot);
        }
        console.log(pointBox);
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
        numberAnswered++;

        if (choice == answer)
        {
            musicManager.winSound();
            button.style.background = "#38d15e";
            console.log(numberAnswered);
            document.getElementById('point' + numberAnswered).classList.add('win-point');
            numberCorrect++;
        }
        else {
            musicManager.loseSound();
            button.style.background = "#d13838";
            document.getElementById('point' + numberAnswered).classList.add('lose-point');
            numberWrong++;
            wordsToReview.push(' '+answer);
        }

        await timer(800);
        let box = button.parentNode;
        let question = box.parentNode;

        generator.toggleAnswered();
        question.remove();

        if(qBoxes.length == 0) {
            resultsPage();
        }

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
        loadQuestions,
        getResults,
        getCategoryFinishedStatus,
        getCategoryResultText
    };
})();
  
  
  export {
    layout
  }
