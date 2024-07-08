const quizData = [
    {
        question: "Quelle est la capitale de la France?",
        answers: {
            a: "Madrid",
            b: "Berlin",
            c: "Paris",
            d: "Rome"
        },
        correct: "c"
    },
    {
        question: "Qui a écrit 'Les Misérables'?",
        answers: {
            a: "Victor Hugo",
            b: "Émile Zola",
            c: "Albert Camus",
            d: "Marcel Proust"
        },
        correct: "a"
    },
    {
        question: "Quelle est la plus grande planète du système solaire?",
        answers: {
            a: "Terre",
            b: "Mars",
            c: "Jupiter",
            d: "Saturne"
        },
        correct: "c"
    }
];
var quiz=document.querySelector(".quiz")
for(let i of quizData){
    var div=document.createElement("div")
    var question=document.createElement("p")
    question.innerHTML=i.question
    div.appendChild(question)
    quiz.appendChild(div)
     var rep=document.createElement("p")
     rep.innerHTML="a-"+i.answers.a+" /b-"+i.answers.b+" /c-"+i.answers.c+" /d-"+i.answers.d+" "
     var input=document.createElement("input")
     
     input.setAttribute("type","text")
     input.setAttribute("class","answer")
     input.setAttribute("maxlength","1")



     question.appendChild(rep)
     question.appendChild(input)

}
var input=document.querySelectorAll(".answer")
for(let i=0;i<=quizData.length;i++){
    input[i].classList.add("form-control");
}

function check(){
    var  score=0

    var input=document.querySelectorAll(".answer")

    for(let i=0;i<=quizData.length;i++){
        if(input[i].value===""){
            input[i].style="border:1px solid red;"
        }
        
        else if(input[i].value.length>0){
            input[i].style="border:1px solid green;"
            
        }
        if(quizData[i].correct===input[i].value){
        
        score=score+1

        document.getElementById("score").innerHTML="votre score final est:"+score

        }
        input[i].value=""
    }

    return

    
    
    
}
