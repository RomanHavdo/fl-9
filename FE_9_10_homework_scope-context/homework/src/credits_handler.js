function userCard(key) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    const tax=0.5;
    const oneHundredPercent=100;

    function currentDate() {
        const time = new Date().toLocaleTimeString('en-GB');
        const data = new Date().toLocaleDateString('en-GB');
        const date = data + ', ' + time;

        return date;
    }
    return {
        getCardOptions() {
            return { key, balance, transactionLimit, historyLogs };
        },
        putCredits(amountOfCredits) {
            balance += amountOfCredits;
            historyLogs.push({
                operationType: 'Received credits',
                credits: amountOfCredits,
                operationTime: currentDate()
            }
            );
        },
        takeCredits(amountOfCredits) {
             balance -= amountOfCredits;
                historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: amountOfCredits,
                    operationTime: currentDate()
                }
                );
            
        },
        setTransactionLimit(amountOfCredits) {
            transactionLimit = amountOfCredits;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: amountOfCredits,
                operationTime: currentDate()
            }
            );
        },
        transferCredits(amountOfCredits, card) {
            const amountOfCreditsPlusTax = amountOfCredits * tax / oneHundredPercent + amountOfCredits;

            if (amountOfCreditsPlusTax < balance && amountOfCreditsPlusTax < transactionLimit) {
                this.takeCredits(amountOfCreditsPlusTax);
                card.putCredits(amountOfCredits);
            } else {
                console.log('Error');
            }

        }
    }

}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.MAX_NUMBER_CARDS = 3;
    }

    addCard() {
        if (this.cards.length < this.MAX_NUMBER_CARDS) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log(`Error: You have maximum number of card - 3!`);
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}
