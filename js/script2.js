	
//1.  function durjoy(){
//	document.write("This is Durjoy");
//}

	
	
//	2. alert(5+6);

// 3. window.alert(5+6);


//4. console.log(5+6);

// x=5;
// y=6;
// z=x+y;
//
//document.getElementById("demo").innerHTML=z;



//function durjoy(){
//	document.getElementById("demo").innerHTML="My name is Durjoy";
//	document.getElementById("demo1").innerHTML = " and I am 24 years OLD ";
//}


//var x = "Volvo" + 16 + 4;
//document.getElementById("demo").innerHTML=x;

//var x="This is Durjoy";
//var z = "and it's alright";
//var y = 'NO! It"s not alright';
//
//document.getElementById("demo").innerHTML=x;
//document.getElementById("demo1").innerHTML=y;
//document.getElementById("demo2").innerHTML=z;

//var cars=["toyota", "tata" , " Honda"];
//
//document.getElementById("demo").innerHTML=cars[1];




//
// var person = {
//	name: "Durjoy",
//	age: 22,
//	location: "Bashundhara ",
//	place: "Dhaka",
//	
//};
//document.getElementById("demo").innerHTML= person.name + " is " + person.age + " yeard old  and he lives in " + person.location + person.place;



//document.getElementById("demo").innerHTML= typeof "Durjoy " + typeof  20 ;


//document.getElementById("demo").innerHTML= typeof null;



// FUNCTION

//function durjoy(a,b){
//	return a*b;
//}
//
//document.getElementById("demo").innerHTML=durjoy(3,4);



//Farenheit to Celcius

//function toCelcius(f){
//	return (5/9) * (f-32);
//}
//
//document.getElementById("demo").innerHTML=toCelcius(35);


// Calling a Function
//function durjoy(){
//	document.getElementById("demo").innerHTML="Hello Durjoy!";
//}
//
//durjoy();



//Object

//var durjoy={
//	firstName: "Imtiaz",
//	secondName: "Hasan",
//	age: 20,
//	location: "Bashundhara",
//	fullName: function(){
//		return this.firstName + " " + this.secondName;
//	}
//	
//};
////document.getElementById("demo").innerHTML= durjoy.firstName + " is " + durjoy.age + " years old. ";
//document.getElementById("demo").innerHTML= durjoy.fullName();




//// String
//
//var name="Imtiaz Hasan Durjoy";
//document.getElementById("demo").innerHTML=name.length;
//
////Escape Character
//
//var x='It\'s alright ' ;
//var y ="My name is \"Durjoy\" " ;
//var z='and I live in " Bashundhara"';
//
//document.getElementById("demo").innerHTML=x + y +z; 



// Local and Global Variable


//var x="durjoy";  // global variable
//function durjoy(){
//	
//	document.getElementById("demo").innerHTML="my name is "+ x;
//}
//durjoy();



//function durjoy(){
//	var x="durjoy"; // Local Variable
//	document.getElementById("demo").innerHTML ="My name is " + x;
//}
//
//durjoy();


//durjoy();
//function durjoy(){
//	x="durjoy"; // Automatic Global 
//	
//}
//document.getElementById("demo").innerHTML="My name is Imtiaz " + x;


//Events
//function displayDate() {
//	document.getElementById("demo").innerHTML = Date();
//}




//NUmbers
//function durjoy(){
//	var x=999999999999999;
//	var y=9999999999999999;
//	
//	document.getElementById("demo").innerHTML = x + "<br>" + y;
//	
//}


//function durjoy(){
//	var x= 0.2 + 0.3;
//	document.getElementById("demo").innerHTML=x;
//}



//MATH
//function durjoy(){
	
//	document.getElementById("demo").innerHTML=Math.random();
//	document.getElementById("demo").innerHTML=Math.min(30,50, 200, -20,-4000);
//	document.getElementById("demo").innerHTML=Math.max(30,50, 200, -20,-4000);
//	document.getElementById("demo").innerHTML=Math.floor(3.6);
//	document.getElementById("demo").innerHTML=Math.floor(Math.random()*8);
//	document.getElementById("demo").innerHTML=Date();
//	document.getElementById("demo").innerHTML=new Date(2015-7-16);
//	document.getElementById("demo").innerHTML=new Date().getFullYear();
//}



//Array
//	var day=new Date();
//	var days=[ "sunday", "Monday", "Tuesday", "Wednesday" , "Thursday" , "Friday", "Saturday"];
//	document.getElementById("demo").innerHTML= days[day.getDay()];
//	


//var someValue=30;
//var otherValue=24;
//
////if(someValue>44){
////	alert("First Case");
////}
////
////else if(otherValue<30){
////	alert("Other Case");
////}
//
//
//if(someValue>20 && otherValue <30){
//	alert("This is a case");
//}



//var myResult;
//
////alert(myResult=24/"car");
//
////myResult= (24/"car") ? "truthy" : "falsey";
////myResult= (false) ? "truthy" : "falsey";
//myResult= ( 3 === "3") ? "true" : "false";
//alert(myResult);


var name="durjoy";
switch (name){
		case:"durjoy":
		document.write(" My name is Durjoy";)
		break;
		
		case:"anik":
		document.write(" My name is Anik");
		break;
		
		case: "Imtiaz":
		document.write(" My name is Imtiaz");
		break;
		
	default:
		document.write(" My name is Nothing");
		break;
		
		
}

//		alert(name);
