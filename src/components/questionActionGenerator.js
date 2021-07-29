const generator = (() => {
    const questionBoxes = document.getElementsByClassName('question');
    const actions = document.getElementsByClassName('action');
    const startButton = document.getElementById('start-button');

    const timer = ms => new Promise(res => setTimeout(res, ms));

    const chooseQuestion = async () => {
    
        //let randomNum = Math.floor(Math.random() * questionBoxes.length+1);
        let randomNum = 1;
        for(var i = 0; i < randomNum; i++)
        {
          console.log("hello" + document.getElementById("p").innerHTML);

            questionBoxes[i].style.backgroundColor = "rgb(255, 180, 17)";
            await timer(200);
            questionBoxes[i].style.backgroundColor = "rgb(6, 163, 216)";
           if(i == randomNum-1) {            
                questionBoxes[i].style.backgroundColor = "rgb(255, 180, 17)";
                await timer(200);
                questionBoxes[i].style.backgroundColor = "rgb(6, 163, 216)";
                await timer(200);
                questionBoxes[i].style.backgroundColor = "rgb(255, 180, 17)";
                await timer(200);
                questionBoxes[i].style.backgroundColor = "rgb(6, 163, 216)";
                await timer(200);
                questionBoxes[i].style.backgroundColor = "rgb(255, 180, 17)";
                await timer(200);
                questionBoxes[i].style.backgroundColor = "rgb(6, 163, 216)";
                await timer(200);
                questionBoxes[i].style.backgroundColor = "rgb(255, 180, 17)";
                await timer(200);
                questionBoxes[i].style.backgroundColor = "rgb(255, 180, 17)";
                await timer(200);
                questionBoxes[i].classList.toggle('flipped');
                //await timer(2000);
                
                let action = 'sing';
                chooseAction();
    
                //await timer(1000);
                switch (action) {
                    case 'sing':
                        //questionBoxes[i].childNodes[3].innerHTML += "</br> <strong> (sing) </strong>";
                        break;
                }
                //await timer(3000);
                await timer (1000);
                questionBoxes[i].classList.toggle('flipped');
                questionBoxes[i].style.backgroundColor = "rgb(6, 163, 216)";
           }
        }
    };


    const chooseAction = async () => {
        let randomAct = Math.floor(Math.random()*3);
        actions[randomAct].classList.toggle('action-chosen');
        await timer(1000);
        actions[randomAct].classList.toggle('action-chosen');
        return 'sing';
    };

    const updateQuestion = async (question) => {
      console.log(question);
      console.log(question.toString());
      document.getElementById("p").textContent = question.toString();
      console.log(document.getElementById("p").innerHTML);
    };

    
    return {
      questionBoxes,
      updateQuestion,
      startButton,
      chooseQuestion,
      chooseAction,
    };
})();
  
  
  export {
    generator
  }
