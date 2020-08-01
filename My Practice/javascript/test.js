

// // var a = prompt ("Input the value of a");

// // var b = prompt ("Input the value of b");

// // var z = Number(a)*Number(b);

// // alert ("The product of a and b is "+ z);

// // console.log (z);



// var a =7;
// var b = 8;

// var c = Number(a)+Number(b);

// console.log(typeof c);


// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
//   }
//   var a = toCelsius(78);
//   console.log(a);


//   function sayFullName(name){
//     writeInEmail("Hi "+name);
// }

// sayFullName(name5);


var a = 5;
var b = 7;
var z = Number(a)*Number(b);

console.log(z);


var company = {

  empcount: 1000,
  legalName: "hgj pvt ltd",
  address: "hkjgh 8767",
  details: function() {"this company has " +company["empcount"] +"no. of employees."},
}
//not ale to return any value in company object
// not able to call company.details property on cosole
// company= [phone: 23456;] --> how to add this property to an object

var comp = company.empcount;
console.log(comp);
console.log(company.details);



function mul (a,b) {

var y = Number(a)*Number(b);
return y;
}

y = mul (4,6);

console.log(y);