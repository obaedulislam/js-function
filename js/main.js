
function clickFunction(){
    document.getElementById("id1").innerHTML= "JavaScript is the Programming Language for the Web.";
}
/* First End */

function fontFunction(){
    document.getElementById('id2').style.fontSize='35px';
}
/* Second End */

function ligtFunctionone(){
    document.getElementById('id3').src= '../images/others/pic_bulboff.gif';
}
function ligtFunctiontwo(){
    document.getElementById('id3').src= '../images/others/pic_bulbon.gif';
}

/* Third End */

function hideFunction(){
    document.getElementById('id4').style.display='none';
}

/* Fourt End */

function showFunction(){
    document.getElementById('id5').style.display='block';
}
/* Fifth End */

    document.getElementById('id6').innerHTML= 10+15;
/* Sixth End */

function alertFunction(){
    window.alert("Hi, I am JavaScript Developer & CSE Graduate.")
}
/* Seventh End */

function consoleFunction(){
    console.log(100+50);
}
/* Eighth End */

function statementFunction(){
    var x = 20, y = 30, z;
    z = x + y;
    document.getElementById('id9').innerHTML = "The sum of two number is: " +  z + ".";
}
/* Ninth End */

function varFunction(){
    var pi = 3.14;
    var person = "Obaedul Islam";
    var answer = 'Yes I am!';
    document.getElementById("id10").innerHTML = pi + "<br>" + person + "<br>" + answer + ".";
}
/* Tenth End */

function operatorFunction(){
    var txt1 = "What a very";
    var txt2 = "nice day";
    document.getElementById("id11").innerHTML = txt1 + " " + txt2;
}
/* Eleventh End */

function strnumFunction(){
    let x = 5 + 5;
    let y = "5" + 5;
    let z = "Hello" + 5;
    document.getElementById("id12").innerHTML = x + "<br>" + y + "<br>" + z ;
}
/* Twelveth End */

function arrayFunction(){
    const cars = ["Lamborgini", "Bugatti", "Rolls Royce"];
    document.getElementById("id13").innerHTML = cars[2];
}
/* Thirteenth End */

function objectFunction(){
    const person = {
        firstName : "Obaedul",
        lastName : "Islam",
        age : 25,
        designation: "Web Developer",
        degree: "B.Sc. in CSE",
        website: "obaedulislam.com"
    };
    document.getElementById("id14").innerHTML = person.firstName + " " + person.lastName + " is " + person.designation + " age is: " + person.age;
}
/* Fourtennth End */

function typeFunction(){
    document.getElementById("id15").innerHTML = 
    typeof " " + "<br>" +
    typeof " Obaed " + "<br>" +
    typeof " Obaedul10 " + "<br>" +
    typeof  100  + "<br>" +
    typeof  3.1416 + "<br>" +
    typeof (3.1416) + "<br>" +
    typeof true + "<br>" +
    typeof false;
}
/* Fifteenth End */

function methodFunction(){
    const person = {
        firstName: "Obaedul",
        lastName: "Islam",
        id: "4080",
        fullName: function (){
            return this.firstName + " " + this.lastName;
        } 
    };
    document.getElementById("id16").innerHTML = person.fullName();
}
/* Sixteenth End */

function argFunction(txt){
    document.getElementById("id17").innerHTML = txt;
}
/* Seventeenth End */

function bracketFunction(){
    const person = {
        firstName: "Obaedul",
        lastName: "Islam",
        id: 5050,
        fullName: function(){
            return this.firstName + " " + this.lastName; 
        }
    };
    document.getElementById("id18").innerHTML = person.fullName;
}
/* Eighteenth End */

function ctofFunction(f){
    return (5/9) * (f-32);
}
document.getElementById("id19").innerHTML = ctofFunction(77);
/* Nineteenth End */

function displayDate(){
    document.getElementById("id20").innerHTML = Date();
}
/*Twentyth End */

function lengthFunction(){
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("id21").innerHTML = text.length;
}
/* Twenty one End */

function indexFunction(){
    let str = "Please locate where locate occurs 'where'!";
    document.getElementById("id22").innerHTML = str.indexOf("where");
}
/* Twenty Two End */

function matchFunction(){
    var str = "The rain in SPAIN stays mainly in the plain";
    var res = str.match(/ain/g);
    document.getElementById("id23").innerHTML = res;
}
/* Twenty Three End */

function replaceFunction(){
    let text = document.getElementById("id24").innerHTML;
    document.getElementById("id24").innerHTML = 
    text.replace("facebook.com", "obaedulislam.com");
}
/* Twenty Four End */

function upperFunction(){
    let text = document.getElementById("id25").innerHTML;
    document.getElementById("id25").innerHTML = text.toUpperCase();
}
/* Twenty Five End */

function accuracyFunction(){
    let x = 999999999999999;
    let y = 9999999999999999;
    document.getElementById("id26").innerHTML = x + "<br>" + y;
}
/*Twenty Six End */

function nanFunction(){
    let x = 100/"Apple";
    document.getElementById("id27").innerHTML = isNaN(x);
}
/* Twenty Seven End */

function infinityFunction(){
    let myNumber = 2;
    let txt = "";
    while(myNumber != Infinity){
        myNumber = myNumber * myNumber;
        txt = txt + myNumber + "<br>";
    }
    document.getElementById("id28").innerHTML = txt;
}
/* Twenty Eight End */

function numsystemFunction(){
    let myNumber = 32;
    document.getElementById("id29").innerHTML = "32 = " + "<br>" +
    "Decimal: " + myNumber.toString(10) + "<br>" +
    "HexaDecimal: " + myNumber.toString(16) + "<br>"+
    "Octal: " + myNumber.toString(8) + "<br>" +
    "Binary: " + myNumber.toString(2);
}
/* Twenty Ninth End */

function numobjFunction(){
    let x = 123;
    let y = new Number(123);
    document.getElementById("id30").innerHTML = typeof x + "<br>" + typeof y;
}
/* Thirtyth End */