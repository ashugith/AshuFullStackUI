function show(value){
    document.getElementById("result").value += value

}
function solve(){
    document.getElementById("result").value = eval(
        document.getElementById("result").value
    )
}
function clr(){
    document.getElementById("result").value = " "
}
function eraseDigit(){
    const erase = document.getElementById("result").value
    document.getElementById("result").value = erase.slice(0 , -1)
}
document.addEventListener('keypress' , function(){
    alert("Keyboard is locked")
})