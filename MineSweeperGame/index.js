let divContainer=document.getElementById('gridContainer');
let score=document.getElementById('gameScore');
let result=document.getElementById('resultDisplay');
let btnreset=document.getElementById('resetButton');
//creating the 81 boxes
for(let i=1;i<=81;i++){
    let innerDiv=document.createElement('div');
    innerDiv.setAttribute('id',`cell_${i}`);
    innerDiv.classList.add('box');
    innerDiv.style.border='1px solid black';
    divContainer.appendChild(innerDiv);
}
//creating the unique random numbers
function generateRandomNumbers(){
    var numbers=[];
    for(let i=1;i<=81;i++){
        numbers.push(i);
    }

    var randomNumbers=[];

    while(randomNumbers.length<10){
        var randomIndex=Math.floor(Math.random()*numbers.length);
        var randomNumber=numbers[randomIndex];

        //Add the random number to the result array...
        randomNumbers.push(randomNumber);

        //remove the selected number from the original array
        numbers.splice(randomIndex,1);
    }
    return randomNumbers;
}
let random=generateRandomNumbers();
console.log(random);
//clicking the events...
let innerDiv=document.querySelectorAll('.box');

let count=0;

let highlightBomb=function(){
    innerDiv.forEach((el,ind)=>{
        let getId=document.getElementById(`cell_${ind+1}`);
        if(random.includes(ind+1)){
         el.classList.add('bomb');
         result.textContent='game over';
        }
    });
}

innerDiv.forEach((el,ind)=>{
    el.addEventListener('click',()=>{
        //console.log(el.getAttribute('id'));
        //  console.log(el);
        let getId=document.getElementById(`cell_${ind+1}`);
        if(random.includes(ind+1)){
            console.log(getId);
            el.style.backgroundColor='red';
            el.classList.add('bomb');
            highlightBomb();           
        }else{
           // console.log(getId);
           if(el.style.backgroundColor!=='green'){ 
            el.style.backgroundColor='green';
            //console.log(score.textContent);
            count++;
           // console.log(count);
            score.textContent=count;
            if(count===71){
              result.textContent='win';
            }
         }  
        }
    });
});

//reseting the game
btnreset.addEventListener('click',function(){
    score.textContent=0;
    count=0;
    result.textContent="";
    innerDiv.forEach(el=>{
        el.style.backgroundColor='';
        el.classList.remove('bomb');        
    });
   
    // result.classList.remove('result-display');
});


