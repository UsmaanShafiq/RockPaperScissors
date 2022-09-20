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
            let totalRound = 0;

             //Round Play
            function roundPlay(e){

                totalRound += 1;

                //userPick
                userPick = e.target.value;
                userPick = userPick.toLowerCase();

                //CompPick
                let computerOptions = ['rock', 'paper', 'scissors'];
                let compPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];


                //Compare Picks
                let result = '';
                    if( userPick == compPick ){
                        result = `round tied <br> (total rounds - ${totalRound})`;
                        
                    }
                    else if ( 
                        (userPick == 'rock' && compPick == 'paper' ) 
                        || (userPick == 'paper' && compPick == 'scissors' )
                        || (userPick == 'scissors' && compPick == 'rock' )
                    ){
                        compWin += 1;
                        result = `${compPick} beat ${userPick} <br> (total rounds - ${totalRound})`;
                        if(compWin == 5){
                            disableBtns();
                            result = "Computer Won!!! <br> Please refresh the page to play again.";
                            //change result section bgColor by adding class
                            resBgClr = document.getElementById('result').classList;
                            resBgClr.add('red');
                        }
                    
                    }
                    else{
                        userWin += 1;
                        result = `${userPick} beat ${compPick} <br> (total rounds - ${totalRound})`;
                        if(userWin == 5){
                            disableBtns();
                            result = 'You Won!!! <br> Please refresh the page to play again.';

                            //change result section bgColor by adding class
                            resBgClr = document.getElementById('result').classList;
                            resBgClr.add('green');
                        }
                        
                    }
                   document.querySelector('#result').innerHTML = '<h3>' + result + '</h3>';
                   document.querySelector('.userSide .points').innerHTML= '<h3> Points: ' + userWin + '</h3>';
                   document.querySelector('.compSide .points').innerHTML='<h3> Points: ' + compWin + '</h3>';
                }
            
            
            
            // playRound
            pickBtns = document.querySelectorAll('input');
            pickBtns.forEach(pickBtn => {
                pickBtn.addEventListener('click', roundPlay);
            });

            //disable buttons
            function disableBtns(){
                btns = document.querySelectorAll('input');
                btns.forEach(btn => {
                   btn.disabled = true;
                });

            }