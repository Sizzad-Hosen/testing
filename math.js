
export function add(numbers) {

   let sum = 0;

    for(let number of numbers) {
        sum += number;
    }
    return sum;
}


let a = 10;

let b=5;

export function equalOeNot(a,b){
    if(a===b){
        return true;
    }

    else{
        return false;
    }
}