const generator = (() => {
    const startButton = document.getElementById('start-button');
    let topbar = document.getElementById('topbar');
    let gridContainer = document.getElementById('grid-container');
    let questionBoxes = document.getElementsByClassName('question');

    const timer = ms => new Promise(res => setTimeout(res, ms));

    let answered = false;

    const toggleAnswered = () => {
      if(answered) {
        answered = false;
        return;
      }
      else {
        answered = true;
        return;
      }
    };

    const chooseQuestion = async () => {


        let randomNum = Math.floor(Math.random() * questionBoxes.length+1);

/*         if (questionBoxes.length == 0)
        {
          alert("no more");
        } */
        for(var i = 0; i < randomNum; i++)
        {

            questionBoxes[i].style.backgroundColor = "rgb(255, 180, 17)";
            await timer(150);
            questionBoxes[i].style.backgroundColor = "rgb(6, 163, 216)";
           if(i == randomNum-1) {    
                questionBoxes[i].style.backgroundColor = "rgb(255, 180, 17)";
                questionBoxes[i].style.transform = "scale(1.2)";

                await timer (1000);
                questionBoxes[i].style.transform = "scale(1)";
                questionBoxes[i].classList.toggle('flipped');
                questionBoxes[i].style.backgroundColor = "rgb(255, 180, 17)";

            }
        }
    };

    const clickQuestion = async (question) => {
    
    // question.style.transform = "scale(0.7)";
    
    question.style.backgroundColor = "rgb(255, 180, 17)";
    
    await timer (1000);

    question.style.background = 'none';
    question.classList.toggle('flipped');    
    
    while(!answered)
    {
      gridContainer.style.visibility = 'hidden';
      topbar.style.visibility = 'hidden';
      await timer (100);
      if(answered) {
        break;
      }
    }
    console.log(answered);
    await timer (100);

    gridContainer.style.visibility = 'visible';
    topbar.style.visibility = 'visible';
    toggleAnswered();
  };




    const deleteQuestion = (index) => {

      questionBoxes[index].remove();
    
    };  


    const updateQuestion = () => {

      console.log("It stuck: " + document.getElementById("first").innerHTML);
    
    };

    
    return {
      toggleAnswered,
      questionBoxes,
      updateQuestion,
      startButton,
      clickQuestion,
      chooseQuestion,
      deleteQuestion
    };
})();
  
  
  export {
    generator
  }
