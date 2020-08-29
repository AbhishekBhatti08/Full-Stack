

var zeroBtn = document.getElementById('cal-zero');
var oneBtn = document.getElementById('cal-one');
var twoBtn = document.getElementById('cal-two');
var threeBtn = document.getElementById('cal-three');
var fourBtn = document.getElementById('cal-four');
var fiveBtn = document.getElementById('cal-five');
var sixBtn = document.getElementById('cal-six');
var sevenBtn = document.getElementById('cal-seven');
var eightBtn = document.getElementById('cal-eight');
var nineBtn = document.getElementById('cal-nine');

var dotBtn = document.getElementById('cal-dot');
var clearBtn = document.getElementById('cal-clear');
var backspaceBtn = document.getElementById('cal-backspace');
var displayValElement = document.getElementById('cal-display-val');


var displayVal = '0';
var pendingVal;
var evalStringArray = [];

var calNumBtns = document.getElementsByClassName('cal-btn-num');
var calOperatorsBtn = document.getElementsByClassName('cal-btn-operator');


var updateDisplayVal = (clickObj) => {

   
var btnText = clickObj.target.innerText;

    if(displayVal ==='0') {

        displayVal = '';

    }
        displayVal += btnText;
        displayValElement.innerText = displayVal;

}


for (let i = 0; i < calNumBtns.length; i++) {

    calNumBtns[i].addEventListener('click', updateDisplayVal, false);

}

var performOperation = (clickObj) => {

    var operator = clickObj.target.innerText;

    switch (operator) {

        case '+' :
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('+')
            break;

        case '-' :

            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-')
            break;

        case 'x' :
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*')
            break;

            case '÷' :
                pendingVal = displayVal;
                displayVal = '0';
                displayValElement.innerText = displayVal;
                evalStringArray.push(pendingVal);
                evalStringArray.push('/')
                break;

                case '=' :
                    evalStringArray.push(pendingVal);
                    
                    var evaluation = eval(evalStringArray.join(' '))
                    displayVal = evaluation + '';
                    displayValElement.innerText = displayVal;
                    evalStringArray =[];
                    break;
        default:
            break;

    }


}



for (let i = 0; i < calOperatorsBtn.length; i++) {

    calOperatorsBtn[i].addEventListener('click', performOperation, false);


}

clearBtn.onclick = () => {

displayVal = '0';
pendingVal = undefined;
evalStringArray = [];
displayValElement.innerText = displayVal;

}

backspaceBtn.onclick = () => {

let lengthofDisplayVal = displayVal.length;
displayVal = displayVal.splice(0, lengthofDisplayVal-1);
displayValElement.innerText = displayVal;

if (displayVal=== '')
    displayVal = '0';

}


dotBtn.onclick = () => {

    if (!displayVal.includes('.'))
    displayVal += '.';
    displayValElement.innerText = displayVal;

}



