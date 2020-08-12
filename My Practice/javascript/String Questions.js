
// // Q1. 

// var txt = 'w3resource';


// function str (txt) {

//     if (typeof txt === 'string')

//     return true;

//     else 
    
//     return false;
// }

// console.log(str(txt));


// //Q2. 

// // var blank = '';
// // var array

// // function blk (a)

// // function blk (blank) {

// //     if (blank.length === 0) {

// //     return true; }

// //     else {
    
// //     return false; }
// // }

// // console.log(blk(blank));


// // Q3.

// var s = 'City Mall'

// var ary = s.split(' ');

// console.log(ary);


// // Q4.


// var t = "Gurgaon"

// var t1 = t.substr(0, 4);

// console.log(t1);


// Q.5

// var str1 = "Robin Singh"

// var n = str1.search(" ");

// var z = str1.substr(0,n);// Robin 

// var x = str1.substr(n,2);// S


// z = z.concat(" ",x,".");

// console.log(z);


//Q6. 

// var email = "ajay_kumar@gmail.com";

// var e = email.search("@");// @ index

// var un = email.search("_");// _ index

// var s1 = email.substr(0,un);// ajay

// var len = email.length - 1;

// var addr = email.substr(e,len);// @gmail.com

// var s1= s1.concat("...",addr);

// console.log(s1);


// Q7. 

// var tz = "I am from india";

// var replaced = tz.split(' ')

// var n2 = replaced.join("-");

// console.log(n2);




// Q8. 

// var fir = "i am ok"

// fir.split(" ");// array

// var fir1 = fir.charAt(0).toUpperCase()

// var fir2 = fir.slice(1);

// fir1 = fir1.concat(fir2);


// console.log(fir1);


// Q9.


var fa = "i am ok";

fa = fa.split(" ");

function font (a) {

    for (i=0; i<fa.length-1; i++) {

        fa[i] = fa[i].charAt(0).toUpperCase();
        
        }

        return fa;
}

console.log(font(fa));


// var f1 = fa.charAt(0).toUpperCase()// I

// var f2 = fa.slice(1).trim()// 'am ok'

// var f3 = f2.slice(0).charAt(0).toUpperCase()// A

// var f4 = f2.slice(1).charAt(0);//m

// var f5 = 

// console.log(f4)

// fa = fa.split(" ");

// fa1 = fa[0];

// fa2 = fa[1];

// fa3 = fa[2];


// console.log(fa3);


// Q 10.

// var t = "aBhiSHek"

// t = t.split();

// var ha = t[2].toUpperCase();

// console.log(ha);

// function both (t) {

//     for (var i=0; i<t.length-1; i++){

//         if (t[i] === t.charAt(i).toUpperCase())
//         {

//            t[i].toLowerCase();
//         }

//         else if (t[i] === t.charAt(i).toLowerCase())
//         {

//            t[i].toUpperCase;
//         }

//     }

//     return t;
 
// }

// console.log(both(t));



// // Q11.

// var camel = "JavaScript exercises";

// camel = camel.split(" ");


// Q12. 

// Q13.

// var string = 'Ha!'

// var string1 = string.repeat(3);

// console.log(string1);

// function rep (string) {

//     var n = Number;
//     string.repeat(n);

// return string1;

// }
// console.log(rep(string));



//Q13

var string = 'bye';

function repeat1 (string, a) {

    for (var i = 1; i<a; i++) {
    
       string2 = string.repeat(i)

       
        
     }
     return string2;
     
    }
    
    console.log(repeat1(string,3));
    

// Q14


var enter1 = null;

function ent (enter1,e) {
    
    var enter = "Hello are you?";

   var abc = enter.substr(0,e)
   
   var xyz = enter.substr(e,enter.length-1);

   return abc = abc.concat(enter1).concat(xyz);

}

// ent ('Go',6);

console.log(ent ('Go',6));

// var enter = "Hello are you?";

// enter = enter.split(" ");

// console.log(enter);




// Q15


function human (a) {

   
    if (a.length-1 === 1) {

        var y  = a + 'st';
    }
 
    else if (a.length-1 === 2) {

        var y  = a + 'nd';

    }

    else if (a.length-1 === 3) {

        var y  = a + 'rd';

    }

    else var y  = a + 'th';

    return y;
}

console.log(human(56));


// Q16


var trun = 'Where are you going';

function truncate (trun,a) {

    if (a < trun.length-1) {

        var trun1 = trun.substr(0,a);

        var y4 = trun1.concat("...");

    }

    return y4;
}

console.log(truncate(trun,10));


// Q17


var chunk = "Abhishek";

// var gh = chunk.split(" ");

// var ab = [];

function chun (chunk,a) {

    for (i = 0; i<chunk.length - 1; i++){

        if (i ===0) {
        // var len = chunk.length-1;
        var uy1 = chunk.slice(i,i+a);

        // ab = ab.push(gh.slice(i,i+a));
    }

    else if (i ===2) {

        var uy2 = chunk.slice(i,i+a);
    }

    else if (i ===4) {

        var uy3 = chunk.slice(i,i+a);
    }

    else if (i ===6) {

        var uy4 = chunk.slice(i,i+a);
    }
        
    }

    return uy1 + uy2 + uy3; // doubt -> I am not able to repeat the method 
                        //and divide into chunk
}
console.log(chun(chunk,2));

// Q18.


var occ = "the quick brown fox jumps over the lazy dog"


var occurance = occ.match(/the/g).length;

console.log(occurance);




