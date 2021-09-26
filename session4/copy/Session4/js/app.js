//Basic Variables with mathematical Operation
var x=1,y=10,z=0;
var z = x + y;

// Data Types
var height = 10.50;
var name = "Jok";
var is_active = false;

//Global Declaration
var global = 10;
var pi = 3.1416;
var num1=0,num2=0;

//Global Object
var person = {
    firstName: "Jok",
    lastName: "Garcia",
    email: "jok@email.com",
    skill1:"",
    skill2:"",
    skill3:"",
    age: 48,
    computeAge() {
        return this.age + 1;
    }
}


function add_numbers(){
    num1 = parseInt(document.getElementById("txt-1st-num").value);
    num2 = parseInt(document.getElementById("txt-2nd-num").value);

    var total = num1 + num2;

    document.getElementById("p-sum").innerHTML = "Total is :" + total;
    document.getElementById("txt-total").value = total;
}

//Number Comparison
function compare_numbers(){
    num1 = parseInt(document.getElementById("txt-1st-num").value);
    num2 = parseInt(document.getElementById("txt-2nd-num").value);

    var result;
    
    if(num1 > num2){
        result = num1 + " is greater than " + num2
    }
    else if (num2 > num1) {
        result = num2 + " is greater than " + num1
    }
    else{
        result = num2 + " is equal " + num1
    }

    document.getElementById("h2-result").innerHTML = result;
}

//Greetings!
function greet(){
    var first_name = document.getElementById("txt-fname").value;
    var last_name = document.getElementById("txt-lname").value;

    document.getElementById("h2-greet").innerHTML = "Ola! " + first_name + " " + last_name; //Concatenation
}

function Addition(){
    //Local
    var local = 5;
    var sum = global + local;

    console.log("Sum of global is : " + sum);
}

function getRate(){
    var selected = parseInt(document.getElementById("opt-rate").value);
    console.log("selected :" + selected);

    switch(selected){
        case 1: {
            document.getElementById("h2-rate").innerHTML = "NCR Rate : " + 45.00;
            break;
        }
        case 2: {
            document.getElementById("h2-rate").innerHTML = "Bulacan Rate : " + 100.00;
            break;
        }
        case 3: {
            document.getElementById("h2-rate").innerHTML = "Laguna Rate : " + 150.99;
            break;
        }
        default:{
            document.getElementById("h2-rate").innerHTML = "No Area selected!";
            break;
        }
    }
     
}

//Object
function getData(){
    document.getElementById("txt-fname").value = person.firstName;
    document.getElementById("txt-lname").value = person.lastName;
    document.getElementById("txt-email").value = person.email;
    document.getElementById("txt-age").value = person.age;
}

function newData(){
    person.firstName = document.getElementById("txt-fname").value;
    person.lastName = document.getElementById("txt-lname").value;
    person.email = document.getElementById("txt-email").value;
    person.age = parseInt(document.getElementById("txt-age").value);

    person.skill1 = document.getElementById("txt-s1").value;
    person.skill2 = document.getElementById("txt-s2").value;
    person.skill3 = document.getElementById("txt-s3").value;

    var age = person.computeAge();

    document.getElementById("p-fullname").innerHTML = person.firstName + " " + person.lastName + " : " + person.email + " : " + age;
    document.getElementById("p-skills").innerHTML = "Skills: " + person.skill1 + "," + person.skill2 + "," + person.skill3;
}

