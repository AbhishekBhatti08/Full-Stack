

// // // var a = prompt ("Input the value of a");

// // // var b = prompt ("Input the value of b");

// // // var z = Number(a)*Number(b);

// // // alert ("The product of a and b is "+ z);

// // // console.log (z);



// // var a =7;
// // var b = 8;

// // var c = Number(a)+Number(b);

// // console.log(typeof c);


// // function toCelsius(fahrenheit) {
// //     return (5/9) * (fahrenheit-32);
// //   }
// //   var a = toCelsius(78);
// //   console.log(a);


// //   function sayFullName(name){
// //     writeInEmail("Hi "+name);
// // }

// // sayFullName(name5);


// var a = 5;
// var b = 7;
// var z = Number(a)*Number(b);

// console.log(z);


// var company = {

//   empcount: 1000,
//   legalName: "hgj pvt ltd",
//   address: "hkjgh 8767",
//   details: function() {"this company has " +company["empcount"] +"no. of employees."},
  
//   }
// //not ale to return any value in company object
// // not able to call company.details property on cosole
// // company= [phone: 23456;] --> how to add this property to an object

// var comp = company.empcount;
// console.log(comp);



// console.log(company.deta



// function mul (a,b) {

// var y = Number(a)*Number(b);
// return y;
// }

// y = mul (4,6);

// console.log(y);

// function add(first, second) {
// return first+second;

// }

// var sum = add(Number(1),Number(2));
// console.log(sum);

var company = {

name: "ABC Consultants",
location: "Gurgaon",
emp: 2000,
getdetails: function() {

  return  `The company name is ${company["name"]}`
 } 


}

console.log(company.getdetails());




// var companyDetails = {
//   name:"MRF",
//   emp: 1600,
//   getDetails: function(){
//       return `The name of company is ${companyDetails["name"]} and has ${companyDetails["emp"]} epms.`
//   },
// }

// console.log(companyDetails.getDetails());

// var student = {

// name: "Abhishek"

// details: function() {
//   return ~the name is ${student["name"]}'
// }

// }

var fruits = ["apple", "orange", "grapes", "bananas"];

console.log(fruits[3]);


var name1 = {

  firstName: "Abhishek",
  secondName: "Bhatti",
  info: function () {

    return `My 1st name is ${name1["firstName"]}`

  },

}
 console.log(name1.info());


var shop = {

type: "stationary",
name: "gh book store",

book: function() {

  return `I need a book from ${shop["name"]}`

},

}
  console.log(shop.book());



  function hello () {

  return "Hello, How are you?"


  }

  var Hi = hello()

  console.log(Hi);


  var city =["gurgaon", 122001, "delhi", "mumbai"]

  console.log(city[2]);


// var count = [1,4,3,89,67,45,34,32,21];

// for (i in count) {

// console.log(count[i]);

// }


var numbers = [5,4,3,2,1];

var len = numbers.length-1;
// for( i in numbers){
//     var temp = numbers[i];
//     numbers[i]=numbers[len];
//     numbers[len]=temp;
//     console.log(numbers);
//     len--;
// }

var halfArray = (numbers.length-1)/2;
for(i=0; i<halfArray; i++){
    var temp = numbers[i];
    numbers[i]=numbers[len];
    numbers[len]=temp;
    console.log(numbers);
    len--;
}

var ownCode = [4,6,7,8,3,4,6,2,1];

var length = ownCode.length-1;

for(i=0; i=length; i--) {

}


