let to =document.querySelector('#to')
let from =document.querySelector('#from')
let amount =document.querySelector('#result')
let output =document.querySelector('#output')

let value = ""

fetch('https://v6.exchangerate-api.com/v6/4f8bdfe8c0741a185bdb1b7e/latest/USD')
   .then(function(result){
    return result.json()
   }).then(data =>{
console.log(data.conversion_rates)
for(let demo in data.conversion_rates){
value +=` <option ${demo}>${demo}</option>`
}
to.innerHTML =  value;
from.innerHTML = value;
})
.catch(error => console.log('error', error));



//to convert

 async function convert(){ 

    let results = await fetch(`https://v6.exchangerate-api.com/v6/4f8bdfe8c0741a185bdb1b7e/pair/${from.value}/${to.value}`); 
    let data = await results.json()
console.log(data.conversion_rate)
amount.value = output.value * data.conversion_rate





}




// function convert(){
//     fetch(`https://v6.exchangerate-api.com/v6/4f8bdfe8c0741a185bdb1b7e/pair/${to.valve}/${there.value}`)
//  .then(respond => Response.json())
//  .then(data =>{
//       console.log(data)
//    check = data. conversion_rates
// console.log(check)
//     output.valve =amount.valve* data.conversion_rate;
//     console.log(data.conversion_rates)console.log(output.value)





// //  })
// // }
   

   