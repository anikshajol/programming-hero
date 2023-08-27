const user ={id:1, name:'gorim amir', job:'actor'}

// javascript object notation(JSON)

const stringified = JSON.stringify(user)

/*  
{ id: 1, name: 'gorim amir', job: 'actor' 
}
{"id":1,"name":"gorim amir","job":"actor"}

*/

const parse = JSON.parse(stringified)

// console.log(user);
// console.log(stringified);
console.log(parse);