// let pubG = "We want AC environment, Beryani and Ice Cream";
// console.log(pubG);
// function makePizza(){
//     return "Your Delicious pizza is being prepred";
// }
// let order = makePizza()
// console.log(order);


// function makePizza(){
//     return "your Pizza is being raedy!"
// }
// console.log(makePizza(), "Table 1")
// let makeFrize = () =>{
//     return "your frize is ready!"}
// console.log(makeFrize()," Table 2")


// let SirZiaPromise = new Promise( (resolve, reject)=> {
//     resolve("passed with Mehmod ki methai")
// })

// SirZiaPromise.then( (responce) =>{
//     console.log(responce);
// })


// let SirZiaPromise = new Promise( (resolve, reject)=> {
//     reject("filled with ammi ki chappal")
// })

//  async function SirZiaPromiseStatus(){
//     let status = await SirZiaPromise
//     console.log(status);
// }







// SirZiaPromise.then( (responce) =>{
//     console.log(responce);
// }).catch((error) =>{
//     console.log(error);
// })





let sirZiaPromise = new Promise((resolve, reject)=>{
    //reject("Failed and got a slipper")
    resolve("Passed, got a level up.") 
})

async function sirZiaPromiseStatus(){ // adding async makes a function asynchronous
    try{
        let status = await sirZiaPromise // waits for the response from sirZiaPromise to execute first
        console.log(status, "Try Block")
}
catch(error) {
    console.error("Catch block", error)
}
finally {
    console.log("Finally block")
}
}
sirZiaPromiseStatus()