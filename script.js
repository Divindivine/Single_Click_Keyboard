let firstRow = [];
let secondRow = [];
let thirdRow = [];
let fourthRow = [];
let fifthRow = [];
let mainIncr = 3;




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
    keyboardBuilder();
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

    firstRow.forEach(element => {
        
        output +=`
            <button class="char">${element}</button>
        `
    });
    first_row.innerHTML = output;

    output = "";

    secondRow.forEach(element => {
        output += `
            <button class="char">${element}</button>
        `
    });
    second_row.innerHTML = output;

    output = "";
    
    thirdRow.forEach(element => {
        output +=`
        <button class="char">${element}</button>
        `
    })
    third_row.innerHTML = output;

    output = "";

    fourthRow.forEach(element => {
        output += `
        <button class="char">${element}</button>
        `
    })
    fourth_row.innerHTML = output;

    output = "";

    fifthRow.forEach(element => {
        output += `
        <button class="char">${element}</button>
        `
    })
    fifth_row.innerHTML = output;
;}


fetchdata();

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
            movingMain();
        }
        else if(clickCounter === 2){
            selectingElement();
        }
        else{
            triple();
        }
        clickCounter = 0;
    }, 250);
}


let textArea = document.getElementById('text_area');
let textAreaWidth = window.getComputedStyle(textArea).borderWidth;
let sendArea = document.getElementById('sendAddress');
let sendAreaWidth = window.getComputedStyle(sendArea).borderWidth;
let sendButton = document.getElementById('send_button_div');
let sendButtonWidth = window.getComputedStyle(sendButton).borderWidth;


function movingMain(){
    mainIncr++;

    if(mainIncr % 3 === 1){
        textArea.style.borderWidth = '3px';
        sendArea.style.borderWidth = '1px';
        sendButton.style.borderWidth = "1px";
        
    }
    else if(mainIncr % 3 === 2){
        textArea.style.borderWidth = '1px';
        sendArea.style.borderWidth = '3px';
        sendButton.style.borderWidth = "1px";
    }

    else if(mainIncr % 3 === 0){
        textArea.style.borderWidth = '1px';
        sendArea.style.borderWidth = '1px';
        sendButton.style.borderWidth = "3px";
    }
}


function selectingElement(){
    if(textArea.style.borderWidth === "3px"){
        textArea.readOnly = false;
        textArea.focus();
        textArea.style.height = "45vh";
        let keyboard = document.getElementById('keyboard');
        keyboard.style.display = "block";
        textArea.innerHTML = keyboardRunner();
    }

    else if(sendArea.style.borderWidth ==="3px"){

        sendArea.disabled = false;
        sendArea.focus;
        textArea.style.height = "45vh";
        let keyboard = document.getElementById('keyboard');
        keyboard.style.display = "block";
        textArea.innerHTML = keyboardRunner();

    }
    
    else if(sendButton.style.borderWidth ==="3px"){
        arr.length = 0;

    }
}


function triple(){
    if(textArea.style.borderWidth ==="3px"){
        textArea.readOnly = true;
        textArea.style.height = "70vh";
        let keyboard = document.getElementById('keyboard');
        keyboard.style.display = "none";
    }
}





function keyboardRunner(){

    let arr = [];
    let key = document.getElementsByClassName('char');
    

    let keyArr1 = Array.from(key);
    for(let i = 0; i < keyArr1.length; i++){
        let a = window.getComputedStyle('keyArr1');
lif(a.style.borderWidth === "0px"){
            console.log(keyArr1[i]);
        }
    }

    let keyArr = Array.from(key);
    keyArr.forEach(elem => {
        arr += elem.innerHTML;
    })

    return arr;
}
