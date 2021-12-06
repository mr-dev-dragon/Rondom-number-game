var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 10;
var guessed_nums = [];
var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var trys = 0;

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert(" between 1 and 100  please !! ");
    }
    else {
        guessed_nums.push(user_guess);
        no_of_guesses -= 1;      
        trys += 1;

        if (user_guess < answer && no_of_guesses>=0) {
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_nums;
        }
        else if (user_guess > answer && no_of_guesses>=0) {
            msg1.textContent = "Your guess is too high.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " +guessed_nums;
        }
        else if (user_guess == answer && no_of_guesses <= 10 ) {
            msg1.textContent = "Great You Win!!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";
            document.getElementById("my_btn").disabled = true;
        }
        if(user_guess == answer  && no_of_guesses <= 7){
            msg1.textContent = " you win ! goood joob";
            msg2.textContent = "the number was : " + answer;
            msg3.textContent = "you guessed it in " + guessed_it +  " guesses";


             
           
       } 

        if(user_guess == answer )
              {
                  if(  no_of_guesses >= 8){
                       msg1.textContent = "wtf you are genuis ! ";
                       msg2.textContent = "the number was : " + answer;
                       msg3.textContent = "you guessed it in " + guessed_it + "trys";

          
               }
                  }
        
           if (no_of_guesses <= 0)
               {
                   msg1.textContent = (" oowe ! you lost !")
               
               } 

       } 
       } 
     



       


       
       
       $('#switch').on('click', () => {
        if ($('#switch').prop('checked')) {
            $('.wrapper').addClass('dark');
            $('.container').addClass('con');
   
          ``
        } else {
            $('.wrapper').removeClass('dark');
            $('.container').removeClass('con');
          
           
        }
    }) 