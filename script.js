let showWords = document.querySelector("#Show-word");
let hints = document.querySelector("#hint");
let timer1 = document.querySelector("#time");

let fword, timer;

const initTimer=maxtime=>{
    clearInterval(timer);

    timer= setInterval(()=>{

if(maxtime>0){
    maxtime--;
   return timer1.innerHTML=`Remaining Time:- ${maxtime}`;
    
}
clearInterval(timer);

    alert(`TIMEOUT! Currect Word Was ${fword}`)
    initgame();


    },1000)
}


const initgame=()=>{
    initTimer(30);
    let rendobj=words[Math.floor(Math.random() * words.length)];
fword=rendobj.word.toUpperCase();
    let wordarray=rendobj.word.split("");
    for(let i=wordarray.length-1;i>0;i--){
        let j=Math.floor(Math.random() * i);
        let temp=wordarray[i];
        wordarray[i]=wordarray[j];
        wordarray[j]=temp;
    }
    showWords.innerHTML=wordarray.join(" ");
    hints.innerHTML=rendobj.hint;
    console.log(rendobj.hint)
    console.log(wordarray);
}





function chk(){
    let guessed = document.querySelector("#guess");
    let cmp=guessed.value.toUpperCase();
    
    if(cmp==""){
        alert("Please Enetr Some Guess");
    }
    else if(cmp==fword){
        alert(`Congrets! ${cmp.toUpperCase()} is Correct Answer.`);
        initgame();
        guessed.value="";
    }
    else{
        alert(`OOPs , You Have Guessed wrong`);
        guessed.value="";
    }

    
    
}



initgame();