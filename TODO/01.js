//////////////////////////////////// Q1> Hello World
// let a = "Hello World";
// console.log(a);

//////////////////////////////////// Q2>Print All NUmber
// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// let t =1;

// while(t<=5){
//     console.log(t);
//     t++;
// }

//////////////////////////////////// Q3> Add two Number and Return
// function add(x,y){
//     return x+y;
// }

// let a = 10;
// let b = 65;

//////////////////////////////////// Q4> Area of Reactangle
// function AreaofRectange(width,height){
//     return width*height;
// }

// let area = AreaofRectange(10,32);
// console.log("Area of Rectange is:",area);

//////////////////////////////////// Q5> Reverse String

// let str = "Hello Naman";

// function ReverseString(str){
//     return str.split("").reverse().join("")
// }

// var ans = ReverseString(str);
// console.log(ans)

//////////////////////////////////// Q6> Even and ODD

// function EvenOdd(a){
//     if(a%2 ==0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }

// console.log(EvenOdd(12))
//////////////////////////////////// Q7> Leap Year or not

let isLeapYear = (year)=>{
    if((year % 4 ===0 && year % 100 !==0) || year % 400 ===0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLeapYear(2027))