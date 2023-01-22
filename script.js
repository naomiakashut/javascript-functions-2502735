var temp = 86
tempC()
console.log(temp) // 86
function tempC() {
    // var temp (declared, but not defined)
    console.log(temp) // undefined
    var temp = 50 // var has been redeclarated
    // so it's going to hoist to the top of the 
    // function, like /\
    // therefore it "knows" it has to assign temp later
    temp = (temp - 32) / 1.8
    console.log(temp) // 10
}