let numArr = [2];

for(let i = 2; i <= 1000; i++){
    let carry = 0;
    for(let j = 0; j < numArr.length; j++){
        let num = numArr[j] * 2;
        num += carry;
        if(num >= 10){
            numArr[j] = num % 10;
            carry = Math.floor(num / 10);
            if(j === numArr.length - 1){
                numArr.push(carry);
                break;
            }
        }else{
            numArr[j] = num;
            carry = 0;
        }
    }
}

numArr.reverse();
let sum = 0;
for(let i = 0; i < numArr.length; i++){
    sum += numArr[i];
}

console.log(sum);