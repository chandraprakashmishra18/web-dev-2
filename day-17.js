console.log("First line")
setTimeout(() => {
    console.log("inside timeout")
}, 0);

const p = new Promise((resolve , reject) =>{
    resolve()
})
p.then(() =>{
    console.log("Inside promise")
})

const p2 = new Promise((resolve , reject) =>{
    resolve()
})
p.then(() =>{
    console.log("Inside promise")
})

console.log("Last line")
// <!-- web api handles fncn like setTimeOut and asynch fncns -->
//     <!-- other things which are synchronous in behaviour are generally stored in call stack and function step wise one by one  -->
// callstack se kaam hota rhega and jaise hi async fncn ka kaam complete ho jayega vo execute ho jayega simultaneously
// promise web api me ni jate h vo priority queue me jayaeaga 
// callback queue -- macro queue
// priority queue -- micro queue 
//  all micro task are executed one by one ( follows fifo behaviour )
// callstack follows lifo behaviour 
// setTimeout jaise fncn web API me store hote h 
// once we start using 
// eventloop is like the manager who mamages who'll be running first and in which behaviour 