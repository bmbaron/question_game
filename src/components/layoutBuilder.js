

const layout = (() => {
    const gridContainer = document.getElementById('grid-container');

    const builder = () => {

        gridContainer.innerHTML = '';

        for(let i=1; i<4; i++) {
            let row = document.createElement('div');
            row.classList.add('row-' + i);
            for(let j=1; j<4; j++) {
                let div = document.createElement('div');
                div.classList.add('question');
                let h1 = document.createElement('h1');
                let p = document.createElement('p');
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
                div.appendChild(p);
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
              qBoxes[i].children[1].remove();

              let questionText = String(value);
              let qText = document.createElement('p');
              qText.innerHTML = questionText;
              qBoxes[i].appendChild(qText);
            }
            i++;
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
