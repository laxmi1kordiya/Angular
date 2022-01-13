// // condition statment
// /*var age=41;
// // singel if statment
// if (age > 18){
//     console.log('you can drink rasna water');
// }
// //  if -else statment
// if (age > 18){
//     console.log('you can drink rasna water');
// }
// else{
//     console.log('you cannot drink rasna water');
// }
// // if-else ladder
// if(age>32){
//     console.log('you are not a kid');
// }
// else if(age>26){
//     console.log("bache nahi rahe");
// }
// else if(age>22){
//     console.log("yes bache nahi rahe");
// }
// else if(age>18){
//     console.log("18 bache nahi rahe");
// }
// else{
//     console.log( "bache rahe" );
// }
// console.log("end of ledder");
// */

// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++); {
//     if (i == 2) {
//         // break;
//         //  true condition ne ahithij puri kaarse
//         continue;
//         // i==2 hovathi 3 print thse nahi
//     }
//     console.log(arr[i]);
// }
// arr.forEach(function (element) {
//     console.log(element);
// })
// // output
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);
// // ak var condition chack karse j

// let myarr = ["fan ", "camera", 34, null, true];
// // array method
// console.log(myarr.length);
// myarr.Pop();
// // last element dur karse
// myarr.push("harry")
// // last ma harry umeray jase
// myarr.shift();
// // fast elementdur karse
// const newlen = myarr.unshift("harry");
// console.log(newlen)
// myarr.toString();
// // element string ma avi jase
// myarr.sort();
// // element abcd pramane avi jase

// console.log(myarr)

// // string method in javascript
// let mylovelystring = "harry is a good boy good good harry ";

// console.log(mylovelystring.length)
// // string ni lenth batavase
// console.log(mylovelystring.indexOf("good"))
// // string ma fast good kya numbere che
// console.log(mylovelystring.lastIndexOf("good"))
// // string ma last good kya numbere che

// console.log(mylovelystring.slice(1, 4))
// // string ma 1 thi 4 number su che


// d = mylovelystring.replace("harry", "rohan");
// // string ma harry ni jagiya rohan lakhase

// d = d.replace("good", "bad");
// // string ma good ni jagiya bad lakhase

// console.log(d, mylovelystring)

// let mydate = new Date();
// console.log(mydate.getTime());
// // time minute ma batavse
// console.log(mydate.getFullYear());
// // chalu year batavse
// console.log(mydate.getDay());
// // day number ma batavse
// console.log(mydate.getMinutes());
// // hour upperni minute batavse
// console.log(mydate.getMonth());
// // month batavse
// console.log(mydate.getHours());
// // time hour ma batavse   

// // dom manipuletion
// let elem = document.getElementById('click')
// console.log(elem);
// // dom na page par click button par ckick karse

// let elemclass = document.getElementsByClassName("container")
// console.log(elemclass);
// elemclass[0].style.background = "yello"
// // fast container ne yellow color karse 
// elemclass[0].classlist.add("bg- primary")
// // 0 etle fast container ne bg primary class ni style apse
// elemclass[0].classlist.add("text -success")
// // 0 etle fast container ne text success class ni style apse
// elemclass[0].classlist.remove("text -success")
// // 0 etle fast container ni style ne remove karse
// console.log(elem.innerhtml);
// console.log(elem.innerText);

// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdelement = document.createElement('p');
// createElement.innerText = "this is created para";
// tn[0].appendchild(createElement2, createElement);
// // first div ma para umerase


// createdelement2 = document.createElement('b');
// createElement2.innerText = "this is created bold";
// tn[0].replacechild(createElement2, createElement);
// // first div na para badalavese


// document.title
// // dom nu title batavase
// document.url
// // dom nu url batavase
// document.script
// // dom nu script batavase
// document.link
// // dom nu link batavase
// document.form
// // dom nu form batavase
// document.domain
// // dom nu domain batavase


// // seliting using query
// sel = document.querySelector('.container');
// console.log(sel)
// // First container ni mahiti apse
// sel = document.querySelectorAll('.container');
// console.log(sel);
// // all container ni mahiti apse


// function clicked() {
//     console.log('the button was clicked')
// }
// // button ne click karta masage avse

// // html ma <button id = "click" onclick="clicked"()>click me </button>

// window, onload = function () {
//     console.log('the document was lodded')
// }

// // event in java script
// firstcontainer.addeventlistener('click', function () {
//     console.log("click on container")
// })
// // container ne click karta masage avse

// firstcontainer.addeventlistener('mouseover', function () {
//     console.log("mouse on container")
// })
// // container ma mouse lai jav tyare masage avse

// firstcontainer.addeventlistener('mouseout', function () {
//     console.log("mouse out of container")
// })
// // container mathi mouse bahar lai jav thare masage avse

// firstcontainer.addeventlistener('mouseup', function () {
//     console.log("mouse up when clicked on container")
// })
// // container ma click dabavo thare masage avse 
// firstcontainer.addeventlistener('mousedown', function () {
//     console.log("mouse down when clicked on  container")
// })
// // container ma click chodo thare masage avse






// firstcontainer.addeventlistener('click', function () {
//     document.querySelectorAll('container')[1].innerhtml = "<b> we have clicked</b>"
//     console.log("click on container")
//     // container ma click kar vathi container nu text ni jagiya a we have clicked avse bold thai ne


    
//     let prevhtml = document.querySelectorAll('.cointainter')[1].innerHTML 
//     firstcontainer.addeventlistener('mouseup', function () {
//     document.querySelectorAll('container')[1].innerhtml = prevhtml

//         console.log("mouse up when clicked on container")
//     })
//     // container ma click dabavo thare masage avse 
//     firstcontainer.addeventlistener('mousedown', function () {
//         console.log("mouse down when clicked on  container")
//     })
//     // container ma click chodo thare masage a

arrow function
summ =(a,b)=>{
    return a+b;
}


//     // setTimeout and set interval


















