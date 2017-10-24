function reverseEachWord (sentence) {
    var wordArray = sentence.split(" ")
    
    for(i = 0; i < wordArray.length; i ++) {
        wordArray[i] = wordArray[i].split("").reverse().join("")
    }

    return wordArray.join(" ")
}

function parenCount(str) {
    var parenArray = str.split("")
    var indicator = 0
    if (parenArray[0] === ")" || parenArray[parenArray.length - 1] === "(")
        return false

    for(i = 0; i < parenArray.length; i ++) {
        if(parenArray[i] === "(") {
            indicator += 1
        } else {
            indicator -= 1
        }
        if(indicator < 0)
            return false
    }

    return indicator === 0
}

function add(x, y) {
    if (arguments.length == 2){
        return x + y
    } else {
        return function(y){
            return x + y
        }
    }
}