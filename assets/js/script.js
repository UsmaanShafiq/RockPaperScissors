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
            let userVal = '';
            let userWin = 0;
            let compWin = 0;

             //Round Play
            function roundPlay(e){
                //userPick
                userPick = e.target.value;
                userPick = userPick.toLowerCase();
                console.log('userPick: ' + userPick);


                //CompPick
                let computerOptions = ['rock', 'paper', 'scissors'];
                let compPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
                console.log('compPick: ' + compPick);


                //Compare Picks
                let result = '';
                    if( userPick == compPick ){
                        result = 'round tied';
                        
                    }
                    else if ( 
                        (userPick == 'rock' && compPick == 'paper' ) 
                        || (userPick == 'paper' && compPick == 'scissors' )
                        || (userPick == 'scissors' && compPick == 'rock' )
                    ){
                        compWin += 1;
                        result = `${compPick} beat ${userPick}`;
                        if(compWin == 5){
                            disableBtns();
                           result = "Computer Won!!! <br> Please refresh the page to play again.";
                        }
                    
                    }
                    else{
                        userWin += 1;
                        result = `${userPick} beat ${compPick}`;
                        if(userWin == 5){
                            disableBtns();
                            result = 'You Won!!! <br> Please refresh the page to play again.';
                        }
                        
                    }
                   document.querySelector('.result h3').innerHTML=result;
                   document.querySelector('.userSide .points').innerHTML= '<h3> Points: ' + userWin + '</h3>';
                   document.querySelector('.compSide .points').innerHTML='<h3> Points: ' + compWin + '</h3>';
                }
            
            
            
            
            pickBtns = document.querySelectorAll('input');
            pickBtns.forEach(pickBtn => {
                pickBtn.addEventListener('click', roundPlay);
            });

            function disableBtns(){
                btns = document.querySelectorAll('input');
                btns.forEach(btn => {
                   btn.disabled = true;
                });
            }