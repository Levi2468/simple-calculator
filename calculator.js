let currentInput='';
let previousInput='';
let operator='';
function updateDisplay(){
document.getElementById("display").value=currentInput;
}
function appendNumber(number){
if (currentInput== '0'){
currentInput=number;
}
else{
currentInput+=number;
}
updateDisplay();
}
function appendOperator(op){
if (currentInput==='') return;
if(previousInput===''){
calculate();
}
operator=op;
previousInput=currentInput;
currentInput='';
updateDisplay();
}
function calculate(){
if(previousInput=='' || currentInput==='')
return;
let result;
const current=parseFloat(currentInput);
const prev=parseFloat(previousInput);
switch (operator){
case '+':
result=prev+ current;
break;
case '-':
result=prev-current;
break;
case '*':
result=prev*current;
break;
case '/':
if( current===0)
{
alert("cannot divided by zero");
return;
}
result=prev/ current;
break;
default:
return;
}
currentInput=result.toString();
operator='';
previousInput='';
updateDisplay();
}
function clearDisplay(){
currentInput='';
previousInput='';
operator='';
updateDisplay();
}