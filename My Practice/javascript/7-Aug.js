
// var numbers = [2,4,6,3,9,8,9]


// var minimum = numbers[0];

// function reverse(numbers) {

//     for (i =1; i<numbers.length; i++)
// {
//  if ( numbers[i]<minimum  ) {

//     minimum = numbers[i]
//  }


// }
// return minimum;

// }

// console.log(reverse(numbers));


var array = [1,2,3,4]

for (var i = array.length - 1; i >= 0; i--) {

    console.log(array[i]);
}


// i = 9
// j = 6

//Print - 2,6

zeroEnd = [1,2,3,0,4,0,5,0,6,0,2,0] //-> move all the 0's in the back

for ( var i = zeroEnd.length-1; i>0; i--) {
    var j = zeroEnd[i]
    if ( j !=0) {

        
    console.log(j)


    }

}