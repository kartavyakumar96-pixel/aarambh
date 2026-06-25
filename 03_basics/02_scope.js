let a = 10
const b = 20
var c = 30 // We will not use generally
if(true){
    let a = 100
    const b =200
    var c =300

}
console.log(a)
console.log(a)
console.log(c)



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



const addTwo= function(num){
    return num + 2
}
console.log(addTwo(5))