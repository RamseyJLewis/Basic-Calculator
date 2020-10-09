var allButtons = document.querySelectorAll('button')
//set allButtons to any button in the HTML
var screen = document.querySelector('#screen')
//set screen to the id of screen in the HTML
var lastchar = ''
//set last char to an open string

function addAllEventListeners(arr){

    for(var i = 0; i < arr.length; i++){
      arr[i].addEventListener('click', inputChange);

    }
  }
  addAllEventListeners(allButtons);
//in Above Function when there is a click update screen 





function inputChange(event){
    var char = event.target.innerHTML
    if(lastchar == ' = ' && char.match(/[0-9]/g)){
    //if lastchar is ' = ' and char is a number between 0-9
    screen.innerHTML = ''
    // set the screeb to an empty string
    }
    
    lastchar = ''
    //reset lastchar to an open string

    var screenArr = screen.innerHTML.split(' ') 
    //screenArr is equal to the screen spit at an open space to make an array
    
    if(char.match(/[0-9]/g) || char == " + "|| char == " - "|| char == " x "|| char == " / " ){ 
    screen.innerHTML += char
    //if char is matched to any number 1-9 or the strings of +,-,x,/ 
    //add the char to the screen
    }else if( screenArr.length === 0 && char === '.'  && screen.innerHTML.indexOf('.') == -1){
        screen.innerHTML = screen.innerHTML + '.'
    //if the screen is e,pty and the char is '.' and there is no '.' add '.' to the screen
   
    } else if( screenArr.length !== 0 && char === '.'  && screenArr[screenArr.length -1].indexOf('.') == -1){
        screen.innerHTML = screen.innerHTML + '.'
    //if screen split into an array has a length > 1 check for a '.' in last element 
    //if char is stricly equal to '.' amd there is no '.'make sceen equal screen plus '.'
    }
    else if(char === ' = ' ){
    screen.innerHTML = equater(screen.innerHTML)
    //if char is stricly to ' = ' run equater function envoked by screen
    } else if(char === 'DEL'){
        screen.innerHTML = screen.innerHTML.slice(0,-1)
    // if char is strctly equal to 'DEL' screen equals screen minus the last character
    }else if(char === 'AC'){
        screen.innerHTML = '';
    //if char is strcily equal to 'AC' screen becomes an empty string
    }
    else if(char === '%'){
        screen.innerHTML = screen.innerHTML * .01;
        lastchar = ' = '
    //if char is strcily equal to 'AC' screen becomes an empty string
    }
    
}




function equater(calc){
    lastchar = ' = '
    //set lastchar to ' = '
    var  arr =  calc.split(' ')
    //set arr to the arr of calc split at the empty spaces ' '
    var num1 =  Number(arr[0])
    //set num1 to the Nmber of arr at element 1
    var var1 = arr[1]
    //set var1 to the second element of arr that is a number
    var num2 =  Number(arr[2])
     //set num 2 to the third  element of arr that is a number

    if(var1 === "+" ){
        return num1 + num2
    // if var1 is strictly a "+" return num1 + num2
    }else if(var1 === "-" ) {
        return num1 - num2
    // if var1 is strictly a "-" return num1 - num2
    }else if(var1 === "x" ) {
        return num1 * num2
    // if var1 is strictly a "x" return num1 * num2
    }
    else if(var1 === "/" ) {
    return num1 / num2
    // if var1 is strictly a "/" return num1 / num2
    }
    else if(var1 === "%" ) {
        return num1 * .01
        // if var1 is strictly a "/" return num1 / num2
        }
}






