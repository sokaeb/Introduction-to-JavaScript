/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;
let age = 30

if(age >= votingAge){
    console.log('True');
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let stage = 'yourStage';
let year = 0;
if (year <= 3){
    console.log('toddler');
}else if (year <= 8){
    console.log('youth');
}else if (year <= 14){
    console.log('preteen');
}else if (year <= 18){
    console.log('teenager');
}else {
    console.log('adult');
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number('1999'));

//Task d: Write a function to multiply a*b 

function multiply(num1, num2){
    return(num1*num2);
}
console.log(multiply(5,5));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let dogAge = 7;
function dogYears(dogAge, age){
    return(dogAge * age)
}
console.log(dogYears(dogAge, 30));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(weight, age){
     if(age >= 1 && weight <= 5){
            return weight * .05;
        }
        else if(age >= 1 && weight <=10){
            return weight * .04;
        }
        else if(age >= 1 && weight <= 15){
            return weight * .03;
        }
        else if(age >= 1 && weight > 15){
            return(.02 * weight);
        } 
        else if (age >= 0.1667 && age < 0.3334){
            return weight * .1;
         }
        else if(age >= 0.3334 && age < 0.583){
            return weight * .05;
        }
    else if (age >= 0.583 && age < 1) {
        return weight * .04;
    }
} 

console.log(dogFeeder(15, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// let userChoice = 'scissors';
// let computerChoice = Math.random();
//       if(computerChoice < 0.34){
//           computerChoice = 'rock';
//       }else if (computerChoice <= 0.67){
//           computerChoice = 'paper';
//       }else {
//           computerChoice = 'scissors';
//       }

// let compare = function(pick1, pick2){ 
//     if(pick1 === pick2){
//         return 'tie';
//     }
//     else if(pick1 === 'rock' && pick2 === 'paper' || pick1 === 'paper' && pick2 === 'rock' ){
//         return 'Paper Wins';
//     }
//     else if(pick1 === 'rock' && pick2 === 'scissors' || pick1 === 'scissors' && pick2 === 'rock'){
//         return 'Rock Wins';
//     }
//     else if(pick1 === 'paper' && pick2 === 'scissors' || pick1 === 'scissors' && pick2 === 'paper'){
//         return 'Scissors Wins';
//     }
// }
//     console.log(compare(userChoice, computerChoice));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
        // mi=km*0.62137

function convert(km){
        return km * 0.62137;
    }
    console.log(convert(3));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
        // cm=ft/0.032808

function converter(ft){
    return ft/0.032808;
}
console.log(converter(3));


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num1){
    let num2 = num1;
    for(let i = 0; i < num1; i++){
        console.log(num2 + ' bottles of soda on the wall, ' + num2 + ' bottles of soda, take one down pass it around ' + (num2 - 1) + ' bottles of soda on the wall');
        num2--;
    } 
}

annoyingSong(6);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function grade(mark){
    if(mark >= 90) {
        return 'A';
    } else if (mark >= 80){
        return 'B'
    } else if (mark >= 70){
        return 'C' 
    } else if (mark >= 60){
        return 'D' 
    } else {
        return 'F'
    }
}

console.log(grade(50));
  

  
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let userChoice = prompt("Choose Rock, Paper, or Scissors");
let computerChoice = Math.random();
      if(computerChoice < 0.34){
          computerChoice = 'rock';
      }else if (computerChoice <= 0.67){
          computerChoice = 'paper';
      }else {
          computerChoice = 'scissors';
      }

let compare = function(pick1, pick2){ 
    if(pick1 === pick2){
        return 'tie';
    }
    else if(pick1 === 'rock' && pick2 === 'paper' || pick1 === 'paper' && pick2 === 'rock' ){
        return 'Paper Wins';
    }
    else if(pick1 === 'rock' && pick2 === 'scissors' || pick1 === 'scissors' && pick2 === 'rock'){
        return 'Rock Wins';
    }
    else if(pick1 === 'paper' && pick2 === 'scissors' || pick1 === 'scissors' && pick2 === 'paper'){
        return 'Scissors Wins';
    }
}
    console.log(compare(userChoice, computerChoice));

