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
}

// Subtracts the input from the previos result
function add(){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNum;
    createAndWriteOutput("+", initialResult, enteredNum);
    writeToLog("Add", initialResult, enteredNum, currentResult);
}

// Subtracts the input from the previos result
function subtract(){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNum;
    createAndWriteOutput("-", initialResult, enteredNum);
    writeToLog("Subtract", initialResult, enteredNum, currentResult);
}

// multiples the input from the previos result
function multiply(){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNum;
    createAndWriteOutput("*", initialResult, enteredNum);
    writeToLog("Muliply", initialResult, enteredNum, currentResult);
}

// Divides the input from the previos result
function divide(){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNum;
    createAndWriteOutput("/", initialResult, enteredNum);
    writeToLog("Divide", initialResult, enteredNum, currentResult);
}

// Adds a event listener based on which button you press and calls the
// correspoding function
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

