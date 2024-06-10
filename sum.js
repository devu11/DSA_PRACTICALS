

// function sum(arr){
//     let sum =0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum
// }
// const array = [1,2]
// console.log(sum(array));



// Usiing reduce
const array = [1,2]
const sum = array.reduce((acc,curr)=> acc+curr,0)
console.log(sum);