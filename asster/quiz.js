const questions =[
{
    question: "Whis is larget animal in the world.",
    answers:[
        {text:"Shark", correct:false},
        {text:"Blue whale", correct:true},
        {text:"Elephant ", correct:false},
        {text:"Giraffe", correct:false},
            ]
},
{
    question: "The younger woman carried a little.",
    answers:[
        {text:"Spaniel", correct:false},
        {text:"Bulldog", correct:false},
        {text:"Pekinese dog ", correct:true},
        {text:"Spitz", correct:false},
            ]
},
{
    question: "The younger woman was suffering from.",
    answers:[
        {text:"Stomach pain", correct:false},
        {text:"Back pain", correct:false},
        {text:"Fever ", correct:false},
        {text:"Cough", correct:true},

            ]
},
{
    question: "The problem the bus faced was with the.",
    answers:[
        {text:"Engine", correct:true},
        {text:"Tyre", correct:false},
        {text:"Brake ", correct:false},
        {text:"Horn", correct:false},

            ]
}
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-botton");
const nextNewPage = document.getElementById("next-btn");

let currentQestionIndex = 0;
let score = 0;

function startQuiz(){
      currentQestionIndex = 0;
      score = 0;
      nextNewPage.innerHTML = "Next";
      showQestion();
}

function showQestion(){
    resetStart();
    let currentQestion = questions[currentQestionIndex];
    let qestionOn = currentQestionIndex +1;
     questionElement.innerHTML = qestionOn +" ."+ currentQestion.question;
       

     currentQestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);
     });

    }

    function resetStart(){
        nextNewPage.style.display = "none";
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);
        }

    }
    function selectAnswer(x){
        const selectBtn = x.target;
        const inCorrent = selectBtn.dataset.correct === "true";
        if(inCorrent){
            selectBtn.classList.add("correct");
            score++;
        }
        else{
           selectBtn.classList.add("inCorrect");
        }
        Array.from(answerButton.children).forEach(button =>{
         if(button.dataset.correct === "true"){
            button.classList.add("correct");
         }
         button.disabled = true;
        });
        nextNewPage.style.display = "block";
    }

    function showScore(){
        resetStart();
        questionElement.innerHTML  =`Your scroed ${score} out of ${questions.length}`;
        nextNewPage.innerHTML= "Paly Again";
        nextNewPage.style.display = "block";
    }
    
    function handlNextButton(){
        currentQestionIndex++;
      if(currentQestionIndex < questions.length){
        showQestion();
      }else{
        showScore();
      }
    }
     
    nextNewPage.addEventListener("click", ()=>{
      if(currentQestionIndex < questions.length){
        handlNextButton();
      }
      else{
        startQuiz();
          }
    })
    startQuiz();
