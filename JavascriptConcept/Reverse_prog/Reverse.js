function reverseFunction (num){
    let numStr = num.toString();
    let reversedStr = '';
    for(let i = numStr.length-1 ; i>=0 ; i--)
    {
        reversedStr += numStr[i];
    }
    return parseInt(reversedStr);
}
let num = 6758497 ;
let reversedNum = reverseFunction(num);
document.write(reversedNum)