var firstRow = [];
var secondRow = [];
var thirdRow = [];
var fourthRow = [];
var fifthRow = [];


function fetchdata(){
    fetch("keyboard.json")
    .then((response) => response.json())
    .then((data) => {
        copyData(data.keyboard);
    })
    .catch((err) => {
        console.log("error:", err);
    });
}




function copyData(data){
    data.firstkeys.forEach(element => {
        firstRow.push(element);
    });

    data.secondkeys.forEach(element =>{
        secondRow.push(element);
    });
    data.thirdkeys.forEach(element => {
        thirdRow.push(element);
    });

    data.fourthkeys.forEach(element =>{
        fourthRow.push(element);
    });
    data.fifthkeys.forEach(element => {
        fifthRow.push(element);
    });
}

var Mainoutput = "";

function keyboardBuilder(){
    let keyrows = document.getElementsByClassName('keys');
    let first_row = keyrows[0];
    let second_row = keyrows[1];
    let third_row = keyrows[2];
    let fourth_row = keyrows[3];
    let fifth_row = keyrows[4];
    let output = "";
    
    firstRow.forEach(elem => {
        console.log("hai");
        output +=`
            <button class="char">${elem}</button>
        `
        
    });
    console.log(output);
    
}

fetchdata();

keyboardBuilder();

var clickCounter = 0;
var clickTImer = null;

document.querySelector('body').addEventListener('click',clickFunction);
 function clickFunction(){
    clickCounter++;
    if(clickTImer){
        clearTimeout(clickTImer);
    }
    clickTImer = setTimeout(() => {
        if(clickCounter === 1){
            movingElements();
        }
        else if(clickCounter === 2){
            selectingElement();
        }
        else{
            rowChange();
        }
        clickCounter = 0;
    }, 250);
 }

function movingElements(){
    // let first = document.getElementById('first');
    // first.style.borderWidth = '3px';
}

function selectingElement(){
    console.log("2");
}

function rowChange(){
    console.log("3");
}
