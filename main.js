// Loop Practice #3
// ===============

// Difficulty - 2/5
// ---------

// Requirements
// ----------
// For each problem below, write a loop that prints the 
// given output. Some of the problems will require you to 
// write an if statement in the loop. Assume a global array 
// called students is defined as follows:

// <pre>
// var students = [{
//     name: 'Liz',
//     age: 25,
//     city: 'Boulder'
// },{
//     name: 'Meghan',
//     age: 27,
//     city: 'Denver'
// },{
//     name: 'Trent',
//     age: 32,
//     city: 'Boulder'
// },{
//     name: 'Chelsea',
//     age: 24,
//     city: 'Boulder'
// },{
//     name: 'Amir',
//     age: 18,
//     city: 'Denver'
// }];
// </pre>

// For example:
// ---------

// <em>Problem:</em>

// <pre>
// Liz
// Meghan
// Trent
// Chelsea
// Amir
// </pre>

// <em>Solution:</em>

// <pre>
// for(var i=0; i &lt; students.length; i++) {
//  console.log(students[i].name);
// }
// </pre>

// Problems:
// ----------
// - 25 27 32 24 18
// for (var i = 0; i < 5; i++) {
//     console.log(students[i].age)
// }
// - Liz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver
// for (var i = 0; i < students.length; i++) {
//     console.log(`${students[i].name}, ${students[i].city}`)
// }
// - Liz is from Boulder Trent is from Boulder Chelsea is from Boulder

// for (var i = 0; i < students.length; i++) {
//     if (students[i].city === "Boulder") {
//     console.log(`${students[i].name} is from ${students[i].city}`)
//     }
// }

// - Meghan is older than 25 Trent is older than 25

// for (var i = 0; i < students.length; i ++) {
//     if (students[i].age > 25) {
//         console.log(`${students[i].name} is older then 25`)
//     }
// }