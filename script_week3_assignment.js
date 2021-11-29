// week 3 assignment 1a. 
let age = [3, 9, 23, 64, 2, 8, 28, 93];
let difference = 0;
let displayNumber = 0;
let age2 = age[age.length-1];
let age1 = age[0];
 console.log(age1);
 console.log(age2);
 console.log(difference = age2 - age1);

//week 3 assignment 1b. 
 let age = [3, 9, 23, 64, 2, 8, 28, 65, 93];
 let difference = 0;
 let displayNumber = 0;
 let age2 = age[age.length-1];
 let age1 = age[0];
 console.log(age1);
 console.log(age2);
 console.log(difference = age2 - age1);

//week 3 assignment 1c.
 let age = [3, 9, 23, 64, 2, 8, 28, 93];
 let sum = 0;
 for (let i= 0; i < age.length; i++){
    sum += age[i];
 }
 console.log(sum);
 console.log(sum / age.length);

 //week 3 assignment 2 a.
 let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
 let sum = 0;
 for ( let i = 0; i < names.length; i++){
      sum += names[i].length
 }
console.log(sum);
 console.log(sum / names.length)
 //week 3 assignment 2 b..
 let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
 let joinNames= " ";   data type is a string
 for (let i = 0; i < names.length; i++){
       joinNames += names[i] + " ";
 }
 console.log(joinNames);
 //week 3 assignment 5 and 6
  let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
 let nameLengths = [];
 let sumNamesLength = 0;
 for (let i = 0; i< names.length; i++){
    nameLengths.push(names[i].length);
    console.log(nameLengths);
       sumNamesLength += nameLengths[i];
  }
     console.log(sumNamesLength);
  //week 3 assignment 7
  we can have a function return a value, but the value doesn't get printed out
  a variable is created using the function fullName while passing two Arguments
function createFullName(word, n){
    var combine = word;
   for (let i=1; i < (n); i++) {
never good to use input variables created another one
        combine += word;
    }
    return combine;
}
var fullName = "";
var fullName = createFullName('Hello', 3); 
console.log(fullName);
 // week 3 assignment 8
function greeting (firstName, lastName){
    return (firstName + " " + lastName); 
}
console.log(greeting("George", "Modini"));
  // week 3 assignment 9
  Write a function that takes an array of numbers and returns 
  true if the sum of all the numbers in the array is greater than 100.
   REDUCE is useful for taking values in an array and reducing to one value
  for instance summing values 
let numbers = [3, 9, 23, 64, 2, 8, 28, 65, 93];
let sum = numbers.reduce(function(accumulator, currentValue){
    let total = accumulator + currentValue;
    if (total > 100) {
        } return accumulator + currentValue; 
});
console.log(sum);
 // week 3 assignment 10
 Write a function that takes an array of numbers and returns the average of all the elements in the array.
let avg = numbers.reduce(function(accumulator, currentValue){
  return (accumulator + currentValue) / numbers.length  ;
});
console.log(avg);

// week 3 assignment 11
 Write a function that takes two arrays of numbers and returns true if the average of the elements 
in the first array is greater than the average of the elements in the second array.
function - declaration of the function
 2 arrays - parameters
find the average of each array - calculation
 first find the sum
 reduce()
 or use a for loop and access each element and add them together
 divide by total number of elements
 compare the two - if(>)
 return true if the first one is greater
 see the functions that were in script.js for week 3 

 let array4 = [12, 15, 16, 20, 56, 99];
 let array5 = [43, 21, 97, 34, 95]; 

 function sumOfArray(arrayOfNumbers){
     let sum = 0;
      for (let i =0 ;i < arrayOfNumbers.length; i++){
         sum += arrayOfNumbers[i];
    }
     return sum;
 }

  function averageOfArray(array){
    let avg = sumOfArray(array)/array.length;
   return avg;
 }
  
 function compareArrays(array1, array2){
    let avgArray1 = averageOfArray(array1);
    let avgArray2 = averageOfArray(array2);

    if(avgArray1 > avgArray2){
          return true;
  }
   else 
 return false;
  }
  console.log("Avg of Array 1 " + averageOfArray(array4));
 console.log("Avg of Array 2 " +averageOfArray(array5));
 console.log(compareArrays(array4, array5));

 // week 3 assignment 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
 and returns true if it is hot outside and if moneyInPocket is greater than 10.50

 var isHotOutside = false;
 var moneyInPocket = 10.50
 function willBuyDrink(hot, money){
    if ((hot = true)  && (money > 10.50)){
        return true;
    }
 else
 return false;

 }
 console.log(willBuyDrink(isHotOutside, moneyInPocket));

 // week 3 assignment 13
 I wrote a function to compute a persons maximum heart rate based on their age. The formula is 
 max heart rate = 220- age, the function will take a persons age as an argument and return their
 maximum heart rate


var age = 45;
function maxHeartRate(years){
let = maxhr = 220 - years;
return maxhr;
}
console.log(maxHeartRate(age));