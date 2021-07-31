const questionForm = (() => {


    const form = document.getElementById('form');    
    const submitButton = document.getElementById('btn');
    const wrapper = document.getElementById('wrapperLeft');
    let qBoxes = document.getElementsByClassName("question");
    let json;

    wrapper.onmouseenter = function(){
      this.classList.add('wrapperLeftShow');
    };
  
      wrapper.onmouseleave = function(){
      this.classList.remove('wrapperLeftShow');
     }; 

    submitButton.onclick = function(e) {
      e.preventDefault();
/* 
      Array.prototype.forEach.call(qBoxes, function (box) {
        while (box.firstChild) {
          if(box.lastChild.tagName != 'H1') {
            box.removeChild(box.lastChild);
          }
          else {
            break;
          }
        }
        console.log(box);
      }); */
    
      //wrapper.classList.remove('wrapperLeftShow')

      let formData = new FormData(form);
      let questions = {};

      formData.forEach(function(value, key){
          questions[key] = value;
      });

      console.log(questions);
      attachQuestions(questions);

      //json = JSON.stringify(questions);
      //console.log(json);
    };

    const attachQuestions = (questions) => {
        let i = 0;

        for (let value of Object.values(questions)) {
            //qBoxes[i].textContent = '';
            //document.querySelectorAll('.question p')[0].innerHTML = '';
            //console.log("We need to delete: " + document.querySelectorAll('.question p')[0].innerHTML);
            if(typeof qBoxes[i] != 'undefined')
            {
              qBoxes[i].children[1].remove();

              let questionText = String(value);
              let qText = document.createElement('p');
              qText.innerHTML = questionText;
              qBoxes[i].appendChild(qText);
              console.log("final element text is: " + qBoxes[i].innerHTML);
            }
            i++;
        }
    };
    return {
      attachQuestions

    };
    
  })();

  export {
    questionForm
  }
