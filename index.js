function receivesAFunction(callback){
    callback()
}

function callback() {console.log("How are you")}

function returnsANamedFunction(){
    let x = function (){console.log("Hey!")}
    return x;
}

function returnsAnAnonymousFunction(){
    return function(){console.log("YES!")}
}