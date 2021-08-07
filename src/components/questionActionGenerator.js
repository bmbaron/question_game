const generator = (() => {
    const startButton = document.getElementById('start-button');
    let topbar = document.getElementById('topbar');
    let mainContainer = document.getElementById('main-container');
    let gridContainer = document.getElementById('grid-container');
    let questionBoxes = document.getElementsByClassName('question');
    let footer = document.getElementById('footer');

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
            await timer(200);
            questionBoxes[i].style.backgroundColor = "rgb(6, 163, 216)";

            if(i == randomNum-1) {    
              answered = false;

              questionBoxes[i].style.backgroundColor = "rgb(255, 180, 17)";
              await timer (500);
              questionBoxes[i].style.background = 'none';
              questionBoxes[i].classList.toggle('flipped');    

              while(!answered)
              {
                startButton.style.visibility = 'hidden';
                footer.style.visibility = 'hidden';
                gridContainer.style.visibility = 'hidden';
                topbar.style.visibility = 'hidden';
                await timer (100);
                if(answered) {
                break;
                }
              }
              console.log(answered);
              await timer (100);

              startButton.style.visibility = 'visible';
              footer.style.visibility = 'visible';
              gridContainer.style.visibility = 'visible';
              topbar.style.visibility = 'visible';
              toggleAnswered();
            }
        }
    };

    const clickQuestion = async (question) => {
      answered = false;

      question.style.backgroundColor = "rgb(255, 180, 17)";
      await timer (500);
      question.style.background = 'none';
      question.classList.toggle('flipped');    
      
      while(!answered)
      {
        footer.style.visibility = 'hidden';
        gridContainer.style.visibility = 'hidden';
        topbar.style.visibility = 'hidden';
        await timer (100);
        if(answered) {
          break;
        }
      }
      await timer (100);

      footer.style.visibility = 'visible';
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
