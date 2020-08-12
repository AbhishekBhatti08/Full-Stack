

// increment each array item by 1

var array = [8,7,6,3]

// var newarray = [];

for (i=0; i<array.length; i++ )
 {

    array[i] += 1;

    array;
 }

 console.log(array);

 // print an array from backwards -> [1,2,3,4] -> [4,3,2,1]

 // i = 4
 
   // newa = [4,3,2,1]

 var arr = [1, 2, 3, 4]

 var newArr = [];

for (var i = arr.length - 1; i >= 0; i--) {

    newArr.push(arr[i]);
}

console.log(newArr);




// print an array backwards

var arr1 = [1, 2, 7, 9];

var temp = null;

var len = arr1.length;


for (i=1; i< len-1; i++) {


    if (arr1[i]> arr1[j]) {
        var j = 0
        arr[j] = arr1[i];

        arr1.push(arr1[j]);
        j++;
    }

console.log(arr1);
}


// move all zeros to the end

// i = 0
// 
// zero = [1,2,3,4,5,6,2,0,0,0,0,0]

// var zero = [1,2,3,0,4,0,5,0,6,0,2,0];

var zero = [1,2,3,0,4,0,5,0,6,0,2,1];
var x = [];

var y = 0;

function zeroEnd (zero) {

for (var i = 0; i<length.zero; i++) {
   
if (zero[i] !== 0){

    zero[y] = zero[i];
    y++;
    
}
 
else if (zero[i] == 0) {

var b = zero.length -1;
    zero[b] = zero[i];
    b--;
}

}

return zero;

}

console.log(zero);

// for (i=y; i<length.zero; i++) {

//     zero[i] = 0;
//     x.push(zero[i]);
//  }

// return zero;