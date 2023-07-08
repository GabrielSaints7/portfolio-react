/* for (let i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}

function addTwoNumbers(a, b) {
    let result = a + b
    console.log(`${a} + ${b} = ${result}`)
}

addTwoNumbers(50,5)

function listDeclaratedItems(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(i+1,arr[i])
    }
}

var colors = ['Red', 'Blue', 'Green', 'Yellow', 'Gray', 'White', 'Black']
listDeclaratedItems(colors)
 */

function letterFinder(word, match){
    for (let i = 0; i < word.length; i++) {
        if (word[i] === match) {
            console.log(`Found ${match} at ${i}`)
        }
        else{
            console.log(`---Not found '${match}' at ${i}`)
        }
    }
}

letterFinder('test','t')