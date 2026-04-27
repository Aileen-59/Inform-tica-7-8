// //Program to check if the number is positive

// let number = prompt("Enter a number: ");

// // check if number is greater than 0
// if (number > 0) {
//     // the body of the if statement
//     console.log("positive number");
// }

// console.log("nice number");


function flipcoin(){
    let randomNumber = Math.random();
    console.log(randomNumber);

    let subtitle = document.querySelector("h2");
    if(randomNumber < 0.5){
        subtitle.innerHTML = "Heads";
        subtitle.style.color = "red";
    } else{
        subtitle.innerHTML = "Tails";
        subtitle.style.color = "blue";
    }
}

