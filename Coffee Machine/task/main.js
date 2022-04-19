// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
// Ingredients
let water = 400;
let milk = 540;
let coffee = 120;
let cups = 9;
let money = 550;
// Additional ingredients
let vanillaMilk = 540;
let cocoa = 120;
let chocolate = 120;

let go = true;

while ( go ) {
    console.log("Write action (buy, fill, take, remaining, exit):");
    let action = input();
    switch (action) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            console.log("I gave You $" + money);
            money = 0;
            break;
        case "remaining":
            printState();
            break;
        case "exit":
            go = false;
    }
}

function printState(){
    // Prints additional ingredients too
    console.log( "The coffee machine has:" );
    console.log( water + " ml of water" );
    console.log( milk + " ml of milk" );
    console.log( vanillaMilk + " ml of vanilla milk" );
    console.log( coffee + " g of coffee beans" );
    console.log( cocoa + " g of cocoa powder" );
    console.log( chocolate + " g of chocolate" );
    console.log( cups + " disposable cups" );
    console.log( "$" + money + " of money" );
}

function buy(){
    // Ask for additional products
    console.log("What do You want to buy?");
    console.log("1 - espresso, 2 - latte, 3 - cappuccino,");
    // Additional products
    console.log("4 - vanilla latte, 5 - cocoa, 6 - warm chocolate:");
    let buy = input();
    // d in names as difference ( waterPerCup will be better? )
    let dwater = 0;
    let dmilk = 0;
    let dvmilk = 0;
    let dcoffee = 0;
    let dcocoa = 0;
    let dchocolate = 0;
    let dmoney = 0;
    switch ( buy ) {
        case "1":  //espresso
            dwater = 250;
            dcoffee = 16;
            dmoney = 4;
            break;
        case "2":  // latte
            dwater = 350;
            dmilk = 75;
            dcoffee = 20;
            dmoney = 7;
            break;
        case "3":  // cappuccino
            dwater = 200;
            dmilk = 100;
            dcoffee = 12;
            dmoney = 6;
            break;
        case "4":  // vanilla latte
            dwater = 350;
            dvmilk = 75;
            dcoffee = 20;
            dmoney = 8;
            break;
        case "5":  // cocoa
            dcocoa = 20;
            dmilk = 350;
            dmoney = 9;
            break;
        case "6":  // warm chocolate
            dchocolate = 20;
            dmilk = 350;
            dmoney = 10;
            break;
        case "back":
            dwater = 0;
            dmilk = 0;
            dcoffee = 0;
            dmoney = 0;
    }
    if ( water >= dwater && milk >= dmilk && vanillaMilk >= dvmilk &&
         coffee >= dcoffee && cocoa >= dcocoa && chocolate >= dchocolate &&
         cups > 0 && buy !== "back" ) {
        water -= dwater;
        milk -= dmilk;
        vanillaMilk -= dvmilk;
        coffee -= dcoffee;
        cocoa -= dcocoa;
        chocolate -= dchocolate
        money += dmoney;
        cups--;
    } else {
        if ( water < dwater) {
            console.log("No such water!");
        }
        if ( milk < dmilk ) {
            console.log("No such milk!");
        }
        if ( vanillaMilk < dvmilk ) {
            console.log("No such vanilla milk!");
        }
        if ( coffee < dcoffee ) {
            console.log("No such coffee!");
        }
        if ( cocoa < dcocoa ) {
            console.log("No such cocoa powder!");
        }
        if ( chocolate < dchocolate ) {
            console.log("No such chocolate!");
        }
        if ( cups === 0 ) {
            console.log("No cups!");
        }
    }
}
function fill(){
    console.log("Write how many ml of water you want to add:");
    water += parseInt(input());
    console.log("Write how many ml of milk you want to add:");
    milk += parseInt(input());
    console.log("Write how many ml of vanilla milk you want to add:");
    vanillaMilk += parseInt(input());
    console.log("Write how many grams of coffee beans you want to add:");
    coffee += parseInt(input());
    console.log("Write how many grams of cocoa powder you want to add:");
    cocoa += parseInt(input());
    console.log("Write how many grams of chocolate you want to add:");
    chocolate += parseInt(input());
    console.log("Write how many disposable cups you want to add:");
    cups += parseInt(input());
}