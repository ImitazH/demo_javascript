'use strict';
//alert("Hello Durjoy");
//
//
//var x=5;
//var y=6;
//
//
// alert(x+y);



//var x;
//x=5;
//alert(7);


//var x,y;
//x=10;
//y=x+(x*23/100);
//alert(y);


//var name="Imtiaz Hasan Durjoy";
//alert(name);



//var firstName="Imtiaz";
//var secondName="Hasan";
//var surName="DUrjoy";
//
//alert(firstName+ " " + secondName+ " " + surName);


//var x=21;
//var y=10;
//
//alert(x%y);


//var x=6;
////x += 5;
//x++;
//
//alert(x);



//var x=7;
//
//alert(x++); //ekhaen 1 increase hoyeche but show korbena because post increment
//alert(++x); // ekhane pre increment tai agei 1 increase hoyeche and ager line e increase howa 1 er sathe add hoye 9 show korbe



//var a=5;
// b=6;
//
//alert(a==b);



//var a=5;
//var b=3;
//alert(a != b);


//var a=5;
//var b=5;
//alert(a>=b);



//
//var a=5;
// b=3;
//
//// if(a>b && b==5)  // nicer liine er sathe eksathe link up korte hobe ekhane kono ; deya  jabena. output " nothing "
////if(a>b || b==5) // output "test"
//if (!(a>b || b==5)) // Nothing will be shown now because now the output is 0 (!1=0)
//
//alert("test");



//
//alert( 140 & 120); // bitwise operators -bitwise AND
//alert( 140 | 120); // bitwise OR
//alert( 140 ^ 120); //XOR
//alert( 140 >> 1); // moving bit to the right
//alert( ~140); // bitwise negation



//Conditional Statements

//var a=3;
//    b=3;
//if(a>b)
//	alert(a +" is greater than "+b);
//else if (a<b)
//	alert(a + " is lower than "+b);
//else
//	alert(" a ==b ");



// Conditional Operators - EVen/ ODD

//var x=3;
//var isEven;
//
//if(x%2===0)
//	isEven=true;
//else
//	isEven=false;
//
//alert(isEven);
//
//
//The same code
//var x=2;
//var isEven=(x%2===0) ? true : false;
//alert(isEven);
//
//
//
//
//// OR we can write it mroe efficiently
//var x=5;
////alert ((x%5===0) ? true : false);
//alert ((x%5===0) ? " The value is Even" : " Teh value is not even");



//Switch

//1st Example

//var dayOfWeek=33;
//
//switch(dayOfWeek){
//	case 1:
//		alert("Saturday");
//		break;
//
//	case 2:
//		alert("Sunday");
//		break;
//
//	default:
//		alert("THis is not a working day");
//}



//Second Example
//var dayOfWeek=33;
//switch(dayOfWeek){
//	case 1:
//	case 2:
//	case 3:
//	case 4:
//	case 5:
//		alert("This is Working day");
//		break;
//	case 6:
//	case 7:
//		alert("THis is weekened");
//		break;
//	default:
//		alert("THis is now a day of a week");
//}




//FUNCTIONS


//1
//function test(){
//	return "Durjoy";
//}
//
////var a=test();
//
////alert(a);
// alert(test());


//2
//function add(x,y){
//	return x+y;
//}
//
//var sum=add(3,5);
//
//alert(sum); // in this case alert(add(x,y)); will not work.




//3
//function add(x,y){
//	return x+y ;
//}
//
//
//function division(x,y){
//
//
//	if(y === 0)
//		//alert("you can't divide by 0"); // etake amader {} er vitore rakhte hobe. and er jonno alada 'undefined' message dekhabe.
//		return "you can't divide by 0";
//		//return;
//
//	return x / y ;
//}
//
//var sum=add(3,5);
//alert(sum);
// var div=division(4,0);
//alert(div);



//4

//var a=5;
//
//function test(){
//	return (a);
//}
//alert(a);


//5
//var a=5;
//
//function test()
//{
//	alert(a);
//}
//
//test();



//6

//var a=5;
//function test(){
//	a=3;
//	alert(a);
//
//}
//test ();
//alert(" a is now changed and it equals " + a);



//7 - Anonymous FUnction
//var x=function test(){
//	alert("sample");
//}
//
//x();



//8
// var x= function(arg1){
//	 alert("sample "+ arg1);
// }
// 
// x(5);



//9

//function test(f)
//{
//	f();
//}
//
//
//test(
//	function(){
//		alert("sample ");
//	}
//);




//10

function test(f)
{
	f(4);
}


test(
	function(x){
		alert("sample " + x);
	}
);