


var string = "a quick brown fox";


// string.forEach(capatalize);

function capatalize(string){
    var array = string.split(" ");
  
    console.log(array[1].charAt(0).toUpperCase()+ array[1].substr(1));
   
// console.log(string);
}

capatalize(string);



var string = "a quick brown fox";

function c (string) {
    var arr = string.split(" ");

    for (var i =0; i<arr.length-1; i++) {

        // var result = [];
        
        // result =  result.push(arr[i][0].toUpperCase() + arr[i].substr(1))

       arr = arr[0][0].toUpperCase()+ arr[0].substr(1);
       var arr1 = arr = arr[2][0].toUpperCase()+ arr[2].substr(1);

    }

 return arr + " " + arr1;
}

console.log(c(string));









// Q43..

// function check (a,b) {

//      if (a.charAt(b).toUpperCase() === a.charAt(b)) {

//         console.log("true")
//     }

//     else console.log("false")

// }

// check ("AbhisheK",8);