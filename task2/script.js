
let getSqrt = (a) => {
    if(!a || 0 === a.length){
        console.log('Будь ласка, введіть число!');
    }
    else if(!parseInt(a)){
        console.log('Повинно бути числове значення!')
    }
    else if(0 > a){
        console.log('Введіть додатнє число')
    }
    else{
     let sqr = Math.sqrt(a);
        console.log(sqr)
    }
}

getSqrt('5');
