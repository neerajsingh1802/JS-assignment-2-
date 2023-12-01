// 1.  write a Javascript function to check whether an input is string or not.
//   let str="this is a javascript tutorial. it is a good tutorial."
//   let str4=str.includes("html");
//     console.log(str4);

//2. write a javascript function to check whether a string is blank or not.

// Test Data:
// console.log(is_Blank(""));
// console.log(is_Blank("abc"));

// true
// false

// is_blank=function(input){
//     if(input.length===0)
//     return true;
//     else
//      return false;
// }
// console.log(is_blank(""));
// console.log(is_blank("neeraj"));
// console.log(is_blank("Thakur"));

//3. write a javascript function to split a string and convert it into an array of words.

// TEST DATA
// console.log(string_to_array("Robin Singh"));

// ["Robin","Singh"]

// string_to_array=function(str){
//     return str.trim().split(" ");
// };
// let raj=string_to_array("Robin Singh");
// console.log(raj);

//4. write a javascript function to extract a specified numbers of characters from a string.

// Test Data
// console.log(truncate_string("Robin Singh",4));

// "Robi"

// truncate_string=function(str1,length){

//     if((str1.constructor===String) && (length>0)){
//         return str1.slice(0,length);
//     }
// };

// let raj=truncate_string("Robin Singh",4);
// console.log(raj);

//5. Write a javascript function to convert a string into abbreviated form.

// TEST DATA:
// console.log(abbrev_name("Robin Singh"));

// "Robin S."

// abbrev_name=function(str1){
//     var split_names=str1.trim().split("  ");
//     if(split_names.length>1){
//         return(split_names[0]+" "+split_names[1].charAt(0)+".");
//     }
//      return split_names[0];
// };
// let raj=abbrev_name("Robin Singh");
// alert(raj);

// 6. Write a javascript function that hides email addresses to prevent unauthorized access.

// TEST DATA
// console.log(protect_email("neerajsingh8299390095@gmail.com"));

// output== neeraj...@gmail.com

// protect_email=function(user_email){
//     let avg,splitted,part1,part2;
//     splitted=user_email.split("@");
//     part1=splitted[0];
//     avg=part1.length/2;
//     part1=part1.substring(0,(part1.length-avg));
//     part2=splitted[1];
//     return part1 +"...@"+part2;
// };
// let raj=protect_email("neerajsingha8299390095@gmail.com");
// console.log(raj);

// 7. Write a javascrirpt function to parameterize a string.

// TEST DATA
// console.log(string_parameterize("Robin Singh from USA."));

// output== "robin-singh-from-usa"

// string_parameterize=function(str1){
//     return str1.trim().toLowerCase().
// }

// 8. Write a javascript function to capitalize the first letter of a string.

// TEST DATA
// console.log(capitalize('neeraj js string exercises'));

// output== "Neeraj js string exercises"

// Capitalize = function(str1){
//     return str1.charAt(0).toUpperCase()+str1.slice(1);
// }
// let raj=Capitalize("neeraj js string exercises");
// console.log(raj);

// 9. Write a javascript function to capitalize the first letter of each word in a string.

// TEST DATA

// console.log(capitalize('neeraj js string exercises'));

// output== "Neeraj Js String Exercises"

// function capitalize_words(str) {
//   return str.replace(/\w\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
//   });
// }
// console.log(capitalize_words("neeraj js string exercises"));

// 10. Write a javascript function that takes a string with both lowercase
//    and uppercase letters as a parameters. it converts uppercase letter to
//   lower case,and lower case letters to upper case.

// TEST DATA- console.log(swapcase('AaBbCd));

// swapcase = function swapcase(str) {
//   return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
//       return chr ? match.toUpperCase() : match.toLowerCase();
//   });
// }
// console.log(swapcase('AaBbc'));




// 11. Write a JavaScript function to convert a string into camel case.

// Test Data:
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("javaScriptExercises"));

// input==

// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"

// camelize = function camelize(str) {
//   return str.replace(/\W+(.)/g, function(match, chr)
//    {
//         return chr.toUpperCase();
//     });
// }

// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("java scriptExercises"));



// 11 Write a JavaScript function to concatenate a given string n times.

// Test Data:
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));

// input==>
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"


// function repeat(str, count) {

// return count < 1 ? 'thulu print hoga' : new Array(count + 1).join(str);
//   }
// console.log(repeat('Ha!',0));
// console.log(repeat('Ha!',1));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',10));


// 12.Write a JavaScript function to insert a string within a string at a particular position (default is 1).

// INPUT:-
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));

// output:-
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

insert = function insert(main_string, ins_string, pos) {
  if(typeof(pos) == "undefined") {
   pos = 0;
 }
  if(typeof(ins_string) == "undefined") {
   ins_string = '';
 }
  return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
   }
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
