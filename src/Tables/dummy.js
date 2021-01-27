
function nonRCFS (s){
	for(var i = 0; i<s.length; i++){
		if(s.indexOf(s[i]) == i && s.indexOf(s[i], s.indexOf(s[i])+1) === -1){
		    return (s[i])
	    }
	}
	return 'no repeating charaters'
	
}

"--------------------------------------------------------------------------------------------------------------------------------"
arr.sort((a,b)=>{
	const ab = a.toString()+b.toString();
	const ba = b.toString()+a.toString();
	if(parseInt(ab)>parseInt(ba)){
		return 1
	} else {
		return -1
	}
}).reverse().join('');
"--------------------------------------------------------------------------------------------------------------------------------"
wwwwaaadexxxxxx => w4a3d1e1x6

  function countString(string, char) {
    let count = 0;
    let first = string.indexOf(char);
    while( first !== -1 ){
      count++;
      first = string.indexOf(char, first +1);
    }
    return char+count;
  }
  
  let str = 'wwwwaaadexxxxxx'
  let prev = 0;
  let stringcont = "";
  while(str.length -1 >= prev || prev === -1){
    prev = str.lastIndexOf(str[prev]);
    stringcont = stringcont + countString(str, str[prev++])
  }
  console.log(stringcont);
"--------------------------------------------------------------------------------------------------------------------------------"
 const s = {
	 a:1,
	 b:2
 }
 console.log(JSON.stringify(s))
const string = JSON.stringify(s);
const sd = string.split('":');
console.log(sd)
const sliptArray = sd.filter((r)=>{
	if(r[0]!=="{") return r[0];
});
console.log(sliptArray)
const result  = sliptArray.map((i)=>{
	return i.split(',')[0]
});
console.log(result)
"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
const arr = [];
const objectProperties = (obj) => {
	for(const [,v] of Object.entries(obj)){
    	if(typeof v === 'object') {
        	objectProperties(v)
        } else {
        	arr.push(v)
        }
    }
}
"--------------------------------------------------------------------------------------------------------------------------------"
const arr = [1,2,3,4];
let subarr = [];
var start=0;
for(start = 0; start < arr.length; start++) {
	for(var j = start; j <= arr.length; j++){
		let sub = [];
		for(var k=start; k<j;k++){			
			sub.push(arr[k]);
		}
		sub.length > 0 ? subarr.push(sub) : ''
	}
}
console.log(subarr);
"--------------------------------------------------------------------------------------------------------------------------------"
const arr = [2,4,23,5,34,0,2,4];
findFirstAndSecondMaxNum = (arr) => {
let firstMax = -Infinity; //2,4,23
let secondMax = -999;     //-Infinity,2,4
for(var i=0; i<arr.length; i++){
	if(arr[i] >= firstMax){
		secondMax = firstMax;
		firstMax = arr[i];
	} else if (arr[i]>secondMax){  //5>23
		secondMax = arr[i];
	}
  }
console.log(`First: ${firstMax}, Second:${secondMax}`)  
}
findFirstAndSecondMaxNum(arr);
"--------------------------------------------------------------------------------------------------------------------------------"
`Implement a function compose([a,b,c]) will return a new function which is a(b(c))`
const compose = ([a,b]) => (c) => a(b(c));
const addOne = (n) => {
    return n+1;
}
const timesTwo = (n) => {
    return n*2;
}
compose([addOne, timesTwo])(1);
"--------------------------------------------------------------------------------------------------------------------------------"
const longestUniform = (str) => {
  let indexes = [-1, 0];
  let beginWith = 0;
  let char = str[0];
  
  for(let i = 1; i<= str.length;i++){
    if(char === str[i]){
      continue;
    };
    if(indexes[1] < i - beginWith){
      indexes = [beginWith, i-beginWith];
      if(i+i-beginWith >= str.length){
        break;
      }
    }
    char = str[i];
    beginWith = i;
  }
  return(indexes);
}
longestUniform('aabbbbbCdAA');
longestUniform('ab');
longestUniform('AA');
longestUniform('');
"--------------------------------------------------------------------------------------------------------------------------------"
const nonRepeatingChar = (str) => {
 const char = str[0];
 firstOccurence = str.indexOf(char)
 console.log(str.indexOf(char, firstOccurence + 1));
}
console.log(nonRepeatingChar('abbbba'))
"--------------------------------------------------------------------------------------------------------------------------------"
// program to generate fibonacci series up to n terms

// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
"--------------------------------------------------------------------------------------------------------------------------------"
// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}

"--------------------------------------------------------------------------------------------------------------------------------"

"--------------------------------------------------------------------------------------------------------------------------------"

"--------------------------------------------------------------------------------------------------------------------------------"

"--------------------------------------------------------------------------------------------------------------------------------"