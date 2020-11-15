console.log ("if else if operation");
let percentage= 65;
if (percentage >= 85){
console.log("distinction");
}
else if (percentage >= 40){
console.log("second class");
}
else if (percentage >=60){
console.log("first class");
}
else{
console.log("fail");  
} 

console.log("switch operation")
    let  marks=10;
switch (true){
    case marks>85:
    console.log("distinction");
    break;
    case marks>40:
    console.log("second class");
    break;
    case marks>60:
    console.log("first class");
    break;
    case marks>35:
    console.log("just passed");
    break;
    default:
    console.log("fail");       
}

function studentresult(name,percentage){
    console.log("My name is " + name + " and my percentage is " + percentage );
}
studentresult("Disha Patni",70)
studentresult("Sharuk Khan",30);
studentresult("Salman Khan",34);
studentresult("Rashmika Mandana",66);
studentresult("Shraddha Kapoor",60);





function input(temperature){
    let result = (temperature*9/5)+32 
    console.log("temperature into fahrenheit " + result);
}
input(30)
input(60)
input(100)
input(10)
input(40)
