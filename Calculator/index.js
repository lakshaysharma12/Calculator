var outer = document.querySelector('.outer-div');
var inputdiv = document.querySelector('.input-div');
var input = document.querySelector('.input-box');
var buttons = document.querySelector('.buttons');
var button1 = document.querySelector('.btn1');
var button2 = document.querySelector('.btn2');
var button3 = document.querySelector('.btn3');
var button4 = document.querySelector('.btn4');
var button5 = document.querySelector('.btn5');
var button6 = document.querySelector('.btn6');
var button7 = document.querySelector('.btn7');
var button8 = document.querySelector('.btn8');
var button9 = document.querySelector('.btn9');
var button0 = document.querySelector('.btn0');
var plus = document.querySelector('.btn-plus');
var minus = document.querySelector('.btn-minus');
var multiply = document.querySelector('.btn-multiply');
var divide = document.querySelector('.btn-divide');
var equals = document.querySelector('.btn-equal');
var ac = document.querySelector('.btn-AC');
var op1;
var op2;
var operator = ''; 
button1.addEventListener('click', function() {
    console.log("clicked");
    input.value += '1';
});
button2.addEventListener('click', function() {
    console.log("clicked");
    input.value += '2';
});
button3.addEventListener('click', function() {
    console.log("clicked");
    input.value += '3';
});
button4.addEventListener('click', function() {
    console.log("clicked");
    input.value += '4';
});
button5.addEventListener('click', function() {
    console.log("clicked");
    input.value += '5';
});
button6.addEventListener('click', function() {
    console.log("clicked");
    input.value += '6';
});
button7.addEventListener('click', function() {
    console.log("clicked");
    input.value += '7';
});
button8.addEventListener('click', function() {
    console.log("clicked");
    input.value += '8';
});
button9.addEventListener('click', function() {
    console.log("clicked");
    input.value += '9';
});
plus.addEventListener('click',function(){
    op1 = parseInt(input.value);
    operator = '+';
    input.value='';
});
minus.addEventListener('click',function(){
    op1 = parseInt(input.value);
    operator = '-';
    input.value='';
});
multiply.addEventListener('click',function(){
    op1 = parseInt(input.value);
    operator = '*';
    input.value='';
});
divide.addEventListener('click',function(){
    op1 = parseInt(input.value);
    operator = '/';
    input.value='';
});
ac.addEventListener('click',function(){
    input.value='';
    op1 = 0;
    op2 = 0;
});
equals.addEventListener('click',function(){
    op2 = parseInt(input.value);
    var ans;
    if(operator=='+')
    {
        ans = op1+op2;
    }
    else if(operator=='-')
    {
        ans = op1-op2;
    }
    else if(operator=='*')
    {
        ans = op1*op2;
    }
    else if(operator=='/')
    {
        ans = op1/op2;
    }
    input.value=ans;
});
