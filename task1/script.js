


let getArea = (a) => {
    if (!a || 0 === a.length) {
         console.log('Будь ласка, введіть радіус!');
    } 
    else if(!parseInt(a)){
        console.log('Повинно бути числове значення!')
    }
    else{
        let kolo = a * Math.PI * a;
        console.log(`Площа дорівнює ${kolo.toFixed(4)} квадратних одиниць`);
    }
}

getArea('6');




