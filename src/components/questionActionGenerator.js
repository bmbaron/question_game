

const generator = (() => {
    const actions = document.getElementsByClassName('action');
    const startButton = document.getElementById('start-button');
    let questionBoxes = document.getElementsByClassName('question');
    const timer = ms => new Promise(res => setTimeout(res, ms));

    const chooseQuestion = async () => {

        questionBoxes = document.getElementsByClassName('question');
        let randomNum = Math.floor(Math.random() * questionBoxes.length+1);

/*         if (questionBoxes.length == 0)
        {
          alert("no more");
        } */
        for(var i = 0; i < randomNum; i++)
        {

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
                questionBoxes[i].style.background = "none";
                await timer(200);
                questionBoxes[i].classList.toggle('flipped');
                await timer(2000);
                
/*                 let action = 'sing';
                chooseAction();
    
                //await timer(1000);
                switch (action) {
                    case 'sing':
                        //questionBoxes[i].childNodes[3].innerHTML += "</br> <strong> (sing) </strong>";
                        break;
                } */
                //await timer(3000);
                await timer (1000);
                //questionBoxes[i].classList.toggle('flipped');
                //questionBoxes[i].classList.add("hidden");
                //questionBoxes[i].remove();
            }
        }
    };


  
    const deleteQuestion = (index) => {

      questionBoxes[index].remove();
    
    };  


    const updateQuestion = () => {

      console.log("It stuck: " + document.getElementById("first").innerHTML);
    
    };

    
    return {
      questionBoxes,
      updateQuestion,
      startButton,
      chooseQuestion,
      deleteQuestion
    };
})();
  
  
  export {
    generator
  }
