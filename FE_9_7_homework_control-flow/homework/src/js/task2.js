let check = confirm('Do you want to play a game?');
let userAttemps = 1;
let userMoney = 0;
let isGuess = false;
let maxrange = 5;
let coefficient = 1;
const firstUserAttemp=1;
const secondUserAttemp=2;
const thirdUserAttemp=3;
const firstAttempPrize=30;
const secondAttempPrize=15;
const thirdAttempPrize=7;
const firstGameFirstAttempPrize=10;
const firstGamesSecondAttempPrize=5;
const firstGameThirdAttempPrize=2;
const firstRange=5;

const info = () => `
Enter a number from 0 to ${maxrange}
Attempts left: ${4-userAttemps}
Total prize: ${userMoney}$
Possible prize on current attemp:${userMoney+putNumberForCurrentAttemp(userAttemps)*coefficient}$`;

function putNumberForCurrentAttemp(userAttemps) {
    if (userAttemps === firstUserAttemp) {
        return firstAttempPrize;
    }else if (userAttemps === secondUserAttemp) {
        return secondAttempPrize;
    }else if (userAttemps === thirdUserAttemp) {
        return thirdAttempPrize;
    }
    return `Error`;
}

if (check === false) {
    alert('You did not become a millionaire, but can.')
}else {
    while (check === true) {
        userAttemps = firstUserAttemp;
        const guessNumber = Number(Math.round(Math.random() * maxrange));
        isGuess = false;
        while (userAttemps < 4) {
            const userNumber = Number(prompt('Enter your number from 0 to 5'));
            if (guessNumber === userNumber) {
                switch (userAttemps) {
                    case firstUserAttemp:
                        userMoney += firstGameFirstAttempPrize;
                        isGuess = true;
                        break;
                    case secondUserAttemp:
                        userMoney += firstGamesSecondAttempPrize;
                        isGuess = true;
                        break;
                    case thirdUserAttemp:
                        userMoney += firstGameThirdAttempPrize;
                        isGuess = true;
                        break;
                    default:
                        alert('Something goes wrong');
                        break;
                }
                break;
            }else {
                userAttemps++;
            }
        }

        if (isGuess === false) {
            alert('Thank you for a game. Your prize is:' + userMoney + '$');
            userMoney = 0;

        }else {
            check = confirm('Congratulation!Your prize is:' + userMoney + '$.Do you want continue?');
            if (check === false) {
                alert('Thank you for a game. Your prize is:' + userMoney + '$');
            }else {

                while (check === true) {
                    userAttemps = firstUserAttemp;
                    let nextRange = maxrange * 2;
                    const guessNumber = Number(Math.round(Math.random() * nextRange));
                    maxrange = nextRange;
                    isGuess = false;
                    while (userAttemps < 4) {
                        const userNumber = Number(prompt(info()));
                        if (guessNumber === userNumber) {
                            userMoney += putNumberForCurrentAttemp(userAttemps) * coefficient;
                            isGuess = true;
                            check = confirm('Do you want continue?');
                            if(check===false){
                            alert('Thank you for a game. Your prize is:' + userMoney + '$');
                            }
                            coefficient++;
                            break;
                        }else {
                            userAttemps++;
                        }
                    }

                    if (isGuess === false) {
                        alert('Thank you for a game. Your prize is:' + userMoney + '$');
                        check = false;
                    }

                }

            }
        }
        maxrange = firstRange;
        coefficient = firstUserAttemp;
        userMoney = 0;
        check = confirm('Do you want play again?');
    }
}