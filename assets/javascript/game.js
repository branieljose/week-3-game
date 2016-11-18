

  var options = ["q" ,"w" , "e" , "r" , "t" , "y" , "u" , "i" , "o" , "p" , "a" , "s" , "d" , "f" , "g" , "h" , "j" , "k" , "l" , "z" , "x" , "c" , "v" , "b" , "n" , "m" ];
  var guesses = 9;
  var guessed = ""; 
  var wins = 0;
  var loose = 0;
  var pcChoice;
 
  function random(){
    guesses = 9;
    guessed = "";
 pcChoice = options[Math.floor(Math.random()*options.length)];
 console.log(pcChoice); 
}
  random();

document.onkeyup = function(event) {
  var key = event.key;
  var display = document.querySelector("#result");
  
  
  
      if (key  === pcChoice){
          wins += 1;
       alert("You Won!");
       random();
          }
      else if (key !== pcChoice){
        guesses--;
      alert("You Loose!");
      random();
       }
          
      else if (guesses === 0 ){
        alert("You Lost!");
        random();
      }
      
          console.log(key);

} 
//document.onkeyup = function