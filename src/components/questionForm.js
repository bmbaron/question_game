import {layout} from './layoutBuilder.js'


const questionForm = (() => {
/* 

    const form = document.getElementById('form');    
    const submitButton = document.getElementById('btn');
    const wrapper = document.getElementById('wrapperLeft');


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
      }); 

      wrapper.classList.remove('wrapperLeftShow');

      layout.builder();

      let formData = new FormData(form);
      let questions = {};

      formData.forEach(function(value, key){
          questions[key] = value;
      });

      layout.loadQuestions(questions);

    };
 */

    return {

    };
    
  })();

  export {
    questionForm
  }
