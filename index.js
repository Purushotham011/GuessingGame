const min=1;
const max=100;
const ans= Math.floor(Math.random()*(max-min+1))+min;

let attempts=0;
let guess;
let game = true;

while(game)
{
    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }
    else if(guess<min||guess>max){
        window.alert(`Please enter a valid number`);
    }
    else{
        attempts++;
            if(guess<ans)
            {
                window.alert("TOO LOW !TRY AGAIN!");
            }
            else if(guess>ans)
            {
                window.alert("TOO HIGH !TRY AGAIN!");
            }
            else{
                window.alert(`Congrats! You got it in ${attempts} attempts`);
                game = false;
            }
    }
}