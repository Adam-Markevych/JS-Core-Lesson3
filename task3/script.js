
let MyMath = {
    PI(){
       console.log(3.1415926535897932384626433832795);
    },
    pow(number,degree){
        if(!number || 0 === number.length && !degree || 0 === degree.length){
            console.log('Будь ласка, введіть число!');
        }
        else if(!parseInt(number) && !parseInt(degree)){
            console.log('Повинно бути числове значення')
        }
        else{
            let a = number ** degree;
            console.log(a);
        }
    },
    abs(number){
        if(!number || 0 === number.length){
           console.log('Будь ласка, введіть число!');
        }
        else if(!parseInt(number)){
           console.log('Повинно бути числове значення');
        }
        else{
            let a = number * 1;
           console.log(a);
        
        }
    },
    max(...arg){
        let max = arg[0];
            if(!arg || 0 === arg.length){ 
                console.log('Будь ласка, введіть числа');
            }
            else if(!parseInt(arg)){
                console.log('Повинно бути числове значення');
            }
            else{
                for(let i = 0; i<arg.length; i++){
                    if(arg[i] > max){
                        max = arg[i];
                    }
                }
                console.log(max);
            }
        
        
    },  
    min(...arg){
        let min = arg[0];
        if(!arg || 0 === arg.length){ 
            console.log('Будь ласка, введіть числа');
        }
        else if(!parseInt(arg)){
            console.log('Повинно бути числове значення');
        }
        else{
            for(let i = 0; i<arg.length; i++){
                if(arg[i] < min){
                min = arg[i];
                }
            }
        console.log(min);
    }
     
}
}

MyMath.PI();
MyMath.pow(2,4);
MyMath.abs(4);
MyMath.max(3,6,3,-3,4,6);
MyMath.min(4,-3,5,6,7,8,);