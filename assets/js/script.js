 /*  pseudo code
        1. User enter a value from Rock, Paper, Scissors
            let userValue = valueEntered.

        2. Get a Random Value from Computer same from Rock, Paper or Scissors.
            2.1: Array of these 3 values.
            2.2: Get Random Value from Array.

        3. The one who get the 5 wins first will win.
            userWin = 0;
            compWin = 0;
            
            if User Win {
                userWin++;
                if user wins 5 times{
                    final result User Won
                }
            }
            else{
                compWin++;
                if comp wins 5 times{
                    final result Comp Won
                }
            }

        */
            let userWin = 0;
            let compWin = 0;
            
            //UserValue
            let userVal = prompt('Please Enter Rock, Paper or Scissors.');
            
            userVal = userVal.toLowerCase();
            
            
            //CompValue
            let computerOptions = ['rock', 'paper', 'scissors'];
            let computerSelect = computerOptions[Math.floor(Math.random() * computerOptions.length)];
            
           
            //Checking Results
            function playRound(userVal, computerSelect){ 
                    let result = '';
                    for (i = 1; i < 5 ; i++){
                        if( userVal == computerSelect ){
                            result = 'Round Tied.';
                            
                        }
                        else if ( 
                            (userVal == 'rock' && computerSelect == 'paper' ) 
                            || (userVal == 'paper' && computerSelect == 'scissors' )
                            || (userVal == 'scissors' && computerSelect == 'rock' )
                        ){
                            compWin += 1;
                            result = `Computer Won! <br> ${computerSelect} beat ${userVal} <br>
                            uWon: ${userWin} | cWon: ${compWin}`;
                            if(compWin == 5){
                                alert('Game Over');
                            }
                           
                        }
                        else{
                            userWin += 1;
                            result = `You Won! <br> ${userVal} beat ${computerSelect} <br>
                            uWon: ${userWin} | cWon: ${compWin}`;
                            if(userWin == 5){
                                alert('Game Over');
                            }
                            
                        }
                            document.getElementById('demo').innerHTML = result;
                            
                        
                    }
                    
                }        
                playRound(userVal, computerSelect);