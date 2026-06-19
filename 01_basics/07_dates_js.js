//Dates

let myDate = new Date();  //It is an object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let myCreatesdate = new Date(2023 , 0 , 23)
console.log(myCreatesdate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatesdate.getTime());

// //To get time in seconds reference - 01 jan 1970
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toDateString());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());;


newDate.toLocaleString('default',{
    weekday: "long"
})
