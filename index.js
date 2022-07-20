let receivesAFunction = function(callback) {
    callback()
    
}

let dylansFunction = function() {

}
let returnsANamedFunction = function() {
    return dylansFunction
}

let returnsAnAnonymousFunction = function() {
    return function() {
        
    }
}