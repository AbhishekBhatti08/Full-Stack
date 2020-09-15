
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

function font(a) {

    for (i = 0; i < fa.length - 1; i++) {

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

function repeat1(string, a) {

    for (var i = 1; i < a; i++) {

        string2 = string.repeat(i)



    }
    return string2;

}

console.log(repeat1(string, 3));


// Q14


var enter1 = null;

function ent(enter1, e) {

    var enter = "Hello are you?";

    var abc = enter.substr(0, e)

    var xyz = enter.substr(e, enter.length - 1);

    return abc = abc.concat(enter1).concat(xyz);

}

// ent ('Go',6);

console.log(ent('Go', 6));

// var enter = "Hello are you?";

// enter = enter.split(" ");

// console.log(enter);




// Q15


function human(a) {


    if (a.length - 1 === 1) {

        var y = a + 'st';
    }

    else if (a.length - 1 === 2) {

        var y = a + 'nd';

    }

    else if (a.length - 1 === 3) {

        var y = a + 'rd';

    }

    else var y = a + 'th';

    return y;
}

console.log(human(56));


// Q16


var trun = 'Where are you going';

function truncate(trun, a) {

    if (a < trun.length - 1) {

        var trun1 = trun.substr(0, a);

        var y4 = trun1.concat("...");

    }

    return y4;
}

console.log(truncate(trun, 10));


// Q17


var chunk = "Abhishek";

// var gh = chunk.split(" ");

// var ab = [];

function chun(chunk, a) {

    for (i = 0; i < chunk.length - 1; i++) {

        if (i === 0) {
            // var len = chunk.length-1;
            var uy1 = chunk.slice(i, i + a);

            // ab = ab.push(gh.slice(i,i+a));
        }

        else if (i === 2) {

            var uy2 = chunk.slice(i, i + a);
        }

        else if (i === 4) {

            var uy3 = chunk.slice(i, i + a);
        }

        else if (i === 6) {

            var uy4 = chunk.slice(i, i + a);
        }

    }

    return uy1 + uy2 + uy3; // doubt -> I am not able to repeat the method 
    //and divide into chunk
}
console.log(chun(chunk, 2));

// Q18.


// var occ = "the the quick brown fox jumps over the lazy dog"


// function oc (a,b) {

// for (i=0; i<a.length-1; i++) {

//     var occurance = a.match(/b/g).length();

// }

// return occurance;
// }

// console.log(oc('submit the','the'));



// Q19.


// var ht = "console.log(escape_HTML('<a href=""javascript-string-exercise-17.php" "target=""blank"'))"


// function htm (ht) {

//     for (var i=0; i<ht.length-1; i++) {

//     var firstSingleQoute = string.indexOf("'");
//     var lastSingleQuote = string.lastIndexOf("'");
//     var name = string.slice(firstSingleQoute+1,lastSingleQuote);
//     }

//     return name;
// }
// console.log(ht);


// Q20 

// function dl (str,a,b) {

// var l = 'l';
// var r = 'r';

//     if (b === l) {

//         var word = (str + a).slice(-str.length);

//     }

//     else if (b === r) {

//         var word = (str + a).slice(str.length);

//     }

// return word;
// } 

// console.log(dl('0000','123','r'));

// var wr = '0000';
// var wr1 = '123';

// var wr2 = (wr+wr1).slice(wr.length);

// console.log(wr2);


// Q21. 

function strrep(a, b) {



    var ar = a.repeat(b);
    return ar;
}

console.log(strrep('y', 10));


// // Q22.

// var tre = 'Where are: you going?';

// var at = tre.indexOf(':');

//     function ss (tre,a,b) {

//     var b = a + b;

//     var tre1 = tre.substring(at,b);

//     return tre1;
// }

// // var vc = 'o';

// // var kl = tre.indexOf(vc);

// console.log(ss(tre,':',3));


// Q25. 


function alp(a) {

    return a.split('').sort().join('');

}

console.log(alp('India'));


//Q26.

// var rem = "quick brown fox jumps over the lazy dog";



// function r1 (a,b) {

//     var index = a.indexOf(b);// index of search

//         if (index === -1)
//         {

//             return a;
//         }

//         return a.slice(0,index) + a.slice(index+3, a.length ).trim();


// }

// console.log(r1(rem,'the'));

// Q29... 

var wrt = "where are you you going?";

// var wrt1 = wrt.split(" ");

// var wrt1 = wrt.search('you');

// console.log(wrt1);


function wrd(a, b) {

    var lttr = 0;

    for (var i = 0; i < a.length; i++) {

        if (a.charAt(i) === b) {

            lttr += 1;

        }

    }
    return lttr;

}

console.log(wrd(wrt, "y")); // able to do for character but not for a word like'you'


// Q30.

var suff = "JS PHP Python";

var suff1 = "Python";


// var suff2 = suff.search(suff1);// 7

// var suff3 = suff.substr(suff2,suff.length-1);


function suffix(a, b) {

    var suff2 = a.search(b);

    var suff3 = a.substr(suff2, a.length - 1);

    if (suff3 === b) {

        return true;
    }

    else return false;

}

console.log(suffix(suff, suff1));


// function suffix (a,b) {


//     var lenOf = b.length;
//     var end = a.sub(-1,lenOf);



// }


// Q31....

var data = "3 &>; 2";

function esc(a) {

    for (var i = 0; i < a.length - 1; i++) {

        if (a[i] === "&" || a[i] === "<" || a[i] === ">" || a[i] === "'" || a[i] === '"' || a[i] === ';') {

            a = a.replace(a[i], "");

        }

    }

    return a;
}

console.log(esc(data));


// Q32. 


var remo = "remove_non_ascii('???????PHP-MySQL??????')";


// a[i] =  

function remove(a, b) {

    var len = a.length - 1;

    for (var i = 0; i < len; i++) {

        if (a[i] === b) {

            // console.log(a.length);

            a = a.replace(b, "");
            i--;
        }

    }
    return a;
}


console.log(remove(remo, "?"));// not able to traverse completely in string

// Q33... 

// Q34 ... 

var title = "PHP exercises. python exercises.";

function t(a) {

    var a = a.toString();

    for (i = 0; i < a.length - 1; i++) {
        a= a[i].charAt(0).toUpperCase() 
        var a1 = a[i].substr(1).toLowerCase();
    }
    return a+a1;
}

console.log(t(title));


//Q36 ...


// function zf (a,b) {

//     b =


// }








// Q38. 


function check (a,b) {

    a = a.toLowerCase();
    b = b.toLowerCase();

    var c5 = a.toString().indexOf(b); 

    if (c5>0)

         return 'Matched';
    
         else 

         return 'Not Matched'


}

console.log(check('Hello How','how'));


// Q39 ....

var uncap = "Js String Exercises";

function unc (a) {

    var first = a[0].toLowerCase();

    var next = a.substr(1,a.length-1);

    return first + next;

}

console.log(unc(uncap));


//Q40.. 


var uncap1 = "Js String Exercises";

uncap1.split(" ");

var trs =uncap1[1][0].toLocaleLowerCase() +  uncap1.substr(2,uncap1[1].length);


// function uncapital (a) {

//     var value = a.split(" ");
//     var ara = [];

//     for (var i = 0; i<a.length; i++) {

//         var a1 = a[i][0].toLowerCase() + a[i].substr(1);

//         var ara1 = ara.push(a1);

//         ara1 = ara1.toString();
//     }
    
//     return a1;

// }

console.log(trs);