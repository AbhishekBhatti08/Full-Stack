//Design a system where user downloads a file, then compress it, and finally
// uploads the file to the server.
//Homework -> we can all functions individually
// -> can skip functions in between by passing callback
//-> can make them do work automatically.

function download(url,callback){
    console.log(`File is being downloaded from ${url}`);
    var file = url.split("/").pop();// file = image.jpg
    setTimeout(()=>{
        console.log(`${file} Downloaded`);
        if(typeof callback === 'function')
            callback(file);
    },2000)

}

function compress(file,callback){
    if(file.split(".")[1]!=="zip"){
        console.log(`${file} is compressing.`);

        var archive = file.split(".")[0]+".zip"; // 

        setTimeout(()=>{
            console.log(`${file} is compressed into ${archive}.`);
            callback(archive,"S3");
        },2000)
    }
    else{
        upload(file,"S3");
    }
    
    
}

function upload(archive,server){
    console.log(`${archive} is uploading to ${server}.`);
    setTimeout(()=>{
        console.log(`${archive} is uploaded to the ${server}.`)
    },2000)

}

// fashion-1

// download('www.somesite.com/imges/image.jpg',(file)=>{   //// callback(file);
//     compress(file, function callback (archive, server) { //// this is a compress function calling
//         upload(archive,server) //// this is upload function calling
//     });
// });

//fashion-2
// download('www.somesite.com/imges/image.jpg');
// compress(file);
// upload(archive,server);

// fashion-3
// can skip functions in between


// --------------------------------------------------------------------------------

// Only compress and upload

compress('image.img',function (a,b) {
    upload(a, b)
});

// Only upload

// upload ('image.zip','S3');


// function download(url,callback){
//     console.log(`File is being downloaded from ${url}`);
//     var file = url.split("/").pop();// file = image.jpg
//     setTimeout(()=>{
//         console.log(`${file} Downloaded`);
//         if(typeof callback === 'function')
//             callback(file);
//     },2000)

// }

// function compress(file,callback){
//     if(file.split(".")[1]!=="zip"){
//         console.log(`${file} is compressing.`);

//         var archive = file.split(".")[0]+".zip";

//         setTimeout(()=>{
//             console.log(`${file} is compressed into ${archive}.`);
//             if(typeof callback === 'function')
//             callback(archive,"S3");
//         },2000)
//     }
//     else if(typeof callback === 'function'){
//         upload(file,"S3");
//     }  
// }

// function upload(archive,server){
//     console.log(`${archive} is uploading to ${server}.`);
//     setTimeout(()=>{
//         console.log(`${archive} is uploaded to the ${server}.`)
//     },2000)

// }

// compress('myFile.jpg')
// upload('myfile.zip','S3')

// var file = 'www.somesite.com/imges/image.jpg';

// var archive = file.split(".")[0]+".zip";


// download(file);

// compress(file);


// function download(url,callback){
//     console.log(`File is being downloaded from ${url}`);
//     var file = url.split("/").pop();// file = image.jpg
//     setTimeout(()=>{
//         console.log(`${file} Downloaded`);
//         if(typeof callback === 'function')
//             callback(file);
//     },2000)

// }

// function compress(file,callback){
//     if(file.split(".")[1]!=="zip"){
//         console.log(`${file} is compressing.`);

//         var archive = file.split(".")[0]+".zip";

//         setTimeout(()=>{
//             console.log(`${file} is compressed into ${archive}.`);
//             if(typeof callback === 'function')
//             callback(archive,"S3");
//         },2000)
//     }
//     else if(typeof callback === 'function'){
//         upload(file,"S3");
//     }  
// }

// function upload(archive,server){
//     console.log(`${archive} is uploading to ${server}.`);
//     setTimeout(()=>{
//         console.log(`${archive} is uploaded to the ${server}.`)
//     },2000)

// }

// download('www.somesite.com/imges/image.jpg',(file)=>{   //// callback(file);
//     compress(file =>{ //// this is a compress function calling
//         upload(archive,server) //// this is upload function calling
//     });
// });