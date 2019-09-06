console.log("Hello World, i Know how to count");



[1,2,3,4].forEach(n=>console.log(n));

//a) Create the two arrays below, spelled exactly as they are given. This will form the start for all the following questions

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

// The array type has  a method concat() to merge two or more arrays (does concat mutate an existing array?)
// the concat method is used to merge two or more arrays.

// b) Create a new array called all, which should be a concatenation of the two arrays given above, starting with the boys and ending with the girls.

var all =  boys.concat(girls);

//c) The array type has a cool method to reduce an array into a single string join() (you will love this method)
//  Create a comma separated string containing all the names from the all-array, separated by commas.
//  Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.

console.log(all.join());
// expected output: "Peter,lars,Ole,Janne,hanne,Sanne"

console.log(all.join(''));
// expected output: "PeterlarsOleJannehanneSanne"


console.log(all.join('-'));
// expected output: "Peter-lars-Ole-anne-hanne-Sanne"


// d)  Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)

all.push("Lone","Gitte");

console.log(all);


// e)  Add the names Hans and Kurt to the start of the array

all.unshift("Hans","Kurt" );

console.log(all);
// expected output:  [ 'Hans', 'Kurt', 'Peter', 'lars', 'Ole', 'Janne', 'hanne', 'Sanne' ]


//f)  Remove the first name in the array (Hans)

var all1 = all.shift();

console.log(all);

// [ 'Hans', 'Kurt', 'Peter', 'lars', 'Ole', 'Janne', 'hanne', 'Sanne', 'Gitte' ]

// g)  Remove the last name from the array (Gitte)

console.log(all.pop());

console.log(all);

// expected output: [ 'Kurt', 'Peter', 'lars', 'Ole', 'Janne', 'hanne', 'Sanne', 'Lone' ]


// h) Remove Ole and Janne from the middle of the array

var removed = all.splice(3, 2);

console.log(all);

// expected output[ 'Kurt', 'Peter', 'lars', 'hanne', 'Sanne', 'Lone' ]


// i) Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.

var reversed = all.reverse(); 
console.log('reversed: ', reversed);

//  expected output [ 'Lone', 'Sanne', 'hanne', 'lars', 'Peter', 'Kurt' ]


// j) Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.

all.sort();
console.log(all);

// DER STOD INTET OM HVORDAN SORTERINGEN SKULLE VÆRE! Så jeg har bare brugt en standard sort :D

// expected output [ 'Kurt', 'Lone', 'Peter', 'Sanne', 'hanne', 'lars' ]


// l) Convert all the names in the array to uppercase.

console.log("Kurt Lone Peter Sanne hanne lars".toUpperCase());

// expected output: KURT LONE PETER SANNE HANNE LARS


// m) Create a new array containing all the names that start with either “l” or “L” (hint: use the filter function with a sufficient callback). 

