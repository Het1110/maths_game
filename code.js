alert("This is designed by HET PATEL");
var playing = 0;
var score;var action;
var timeremaining;
var correctAnswer;
document.getElementById("button").onclick = function(){
 if(playing == 1){
 location.reload(); 
 }
 else{
 playing = 1;
 score = 0;
 document.getElementById("co").innerHTML = score;
 show("timeremaining");
 timeremaining = 60;
 document.getElementById("timeremainingvalue").innerHTML = timeremaining;
 hide("gameOver");
 document.getElementById("button").innerHTML = "Reset Game";
 startCountdown();
 newqa();
 }
}
function hide(Id){
  document.getElementById(Id).style.display = "none";
 }
 function show(Id){
  document.getElementById(Id).style.display = "block";
 }

 for(i=1;i<=4;i++){
   document.getElementById("op"+i).onclick = function(){
     if(playing == 1){
       if(this.innerHTML==correctAnswer){
         score++;
         document.getElementById("co").innerHTML = score;
         hide("wrong");
         show("correct");
         setInterval(function(){hide("correct")},1000);

         newqa();
       }
       else{
        show("wrong");
        hide("correct");
        setInterval(function(){hide("wrong")},1000);
        newqa();
       }
       }
     }
   }
   function startCountdown(){
    action = setInterval(function(){
    timeremaining -= 1;
   
   document.getElementById("timeremainingvalue").innerHTML =
   timeremaining;
    if(timeremaining == 0){
    stopCountdown();
    show("gameOver");
    document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
    hide("timeremaining");
    hide("correct");
    hide("wrong");
    playing = 0;
   
   document.getElementById("button").innerHTML = "Start Game";
    }
    }, 1000);
   }
   function stopCountdown(){
    clearInterval(action);
   }

  function newqa(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("box1").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("op"+correctPosition).innerHTML = correctAnswer;
    var answers = [correctAnswer];
    for(i=1; i<5; i++){
    if(i != correctPosition) {
    var wrongAnswer;
    do{
    wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random())); 
    }
    while(answers.indexOf(wrongAnswer)>-1)
    document.getElementById("op"+i).innerHTML = wrongAnswer;
    answers.push(wrongAnswer);
    }
 }
}
   