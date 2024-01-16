function isPalindrome(str){
    let rev = "";
    for(let i = str.length-1 ; i >= 0 ;  i--)
    {
        rev += str[i];
    }
    if(rev == str){
        return true
    }
    else{
        return false ;
    }
    
}
let Str1 = "racecar";
let Str2 = "Rama";
console.log(isPalindrome(Str1));
console.log(isPalindrome(Str2))
