const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";

function writeCards(names, event) {
    let newArray = []; //declaring new array? for the following strings to push into??? whatt
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
   
    return newArray
}

function countDown(n) {

    while (n >= 0) {
        console.log(n);
        n--;
    }

}

