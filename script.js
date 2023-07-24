    let score = JSON.parse(localStorage.getItem('score'));
    if(score === null){
        score = {
            wins:0,
            losses:0,
            ties:0
        };  
    }
    updateScoreElement();
    function playerGame(playerMove){
        const computerMove = pickComputerMove();
        let result=' ';
        updateScoreElement();
        if(playerMove==='rock'){
            if(computerMove==='rock'){
                result='tie.';
            }
            else if(computerMove==='paper'){
                result = 'You lose.';
            }
            else if(computerMove==='scissors'){
                result = 'You win.';
            }
        }
        else if(playerMove==='paper'){
            if(computerMove==='rock'){
                result='You win.';
            }
            else if(computerMove==='paper'){
                result = 'tie.';
            }
            else if(computerMove==='scissors'){
                result = 'You lose.'
            }
        }
        else if(playerMove==='scissors'){
            if(computerMove==='rock'){
                result='You lose.';
            }
            else if(computerMove==='paper'){
                result = 'You win.';
            }
            else if(computerMove==='scissors'){
                result = 'tie.'
            }
        }
        if(result === 'You win.'){
            score.wins +=1;
        }
        else if(result === 'You lose.'){
            score.losses += 1;
        }
        else if(result === 'tie.'){
            score.ties +=1;
        }
        localStorage.setItem('score',JSON.stringify(score));
        console.log(result);
        updateScoreElement();
        document.querySelector('.js-result')
            .innerHTML = `Result:${result}`;
            document.querySelector('.js-moves')
                .innerHTML = `you have choosen <img src="images/${playerMove}-emoji.png" class="move-icon"> computer have choosen <img src="images/${computerMove}-emoji.png" class="move-icon">`;
    }
    function updateScoreElement(){
        document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties:${score.ties}`;
    }
    function pickComputerMove(){
        let computerMove=' ';
        const randomNumber = Math.random();
        console.log(randomNumber);
        if(randomNumber>=0 && randomNumber<1/3){
            computerMove = 'rock';
        }
        else if(randomNumber>=1/3 && randomNumber<2/3){
            computerMove = 'paper';
        }
        else if(randomNumber>=2/3 && randomNumber<1){
            computerMove = 'scissors';
        }
        console.log(computerMove);
        return computerMove;
    }
    function resetScore(){
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
    }
