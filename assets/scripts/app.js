const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Stores the input from the input field
function getUserInput(){
    return parseInt(userInput.value);
}

// prints the most recent operation and calls the func which changes the html
function createAndWriteOutput(operator, resultBeforeCalc, calcNum){
    const description = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, description);
}


function writeToLog(operand, prevRes, operationNum, newResult){
    const logEntry = {
        operations: operand,
        prevResult: prevRes,
        operand: operationNum,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType){
    const enteredNum = getUserInput();

    if(
        calculationType != 'ADD' &&
        calculationType != 'SUBTRACT' &&
        calculationType != 'DIVIDE' &&
        calculationType != 'MULTIPLY' ||
        !enteredNum
     ){
        return
    }
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        mathOperator = "+";
        currentResult += enteredNum;
    }else if(calculationType === 'SUBTRACT'){
        mathOperator = "-";
        currentResult -= enteredNum;
    }else if (calculationType === 'MULTIPLY'){
        mathOperator = "*";
        currentResult *= enteredNum;
    }else if (calculationType === "DIVIDE"){
        mathOperator = "/";
        currentResult /= enteredNum;
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNum);
    writeToLog(calculationType, initialResult, enteredNum, currentResult);
}

// Adds a event listener based on which button you press and calls the
// correspoding function
addBtn.addEventListener("click", function(){
    calculateResult("ADD");
});
subtractBtn.addEventListener("click", function(){
    calculateResult("SUBTRACT");
});
multiplyBtn.addEventListener("click", function(){
    calculateResult("MULTIPLY");
});
divideBtn.addEventListener("click", function(){
    calculateResult("DIVIDE");
});

