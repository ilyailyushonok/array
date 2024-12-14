let arr=['Аня','Вика','Антон','Игорь','Аня']

//обычный цикл for of

// for (const name of arr){
// console.log(name)
// }

// // метод forEach

// arr.forEach(function(item){ //после item можно добавить агрументы index и array, которые выведут номер итерации и массив соответственно
//     console.log(item) 
// })



// // метод map

// let arr2=arr.map(function(item,index){
//     return item + " "+ index
// })
// console.log(arr2)

// // метод filter

// let arr3=arr.filter(function(item){
//    if(item==='Аня')  return true
// })
// console.log(arr3)



// // метод sort

let arr0=[1,4,3,5,2]
let arr4=arr0.sort(function(a,b){ //принимает два аргумента для сравнения
if (a<b) return -1

})
console.log(arr4)