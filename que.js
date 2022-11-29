// first in first out
// class Queue{
//     constructor(){
//         this.arr=[]
//     }
//     adding(elements){
//         this.arr.push(elements)
//     }
//     removing(){
//         return this.arr.shift()     //first out
//     }

// }

// queue=new Queue
// queue.adding(10)
// queue.adding(20)
// console.log(queue)
// queue.removing()
// console.log(queue)



// class Stack{
//     constructor(){
//         this.arr=[]
//     }
//     addelements(elements){
//         this.arr.push(elements)
//     }
//     removeelements(){
//         this.arr.pop()
//     }
// }

// stack=new Stack
// stack.addelements(10)
// stack.addelements(20)
// console.log(stack)
// stack.removeelements()
// console.log(stack)


// rest parameter
// function arrg(a,...arrgs){
//     sum=1
//     for(i=0;i<arrgs.length;i++){
//         sum=sum+arrgs[i]

//     }
//     console.log(sum)
// }
// arrg(1,2,3,4,5)


// spread operatore
// arr1=[1,2,3]
// arr2=[4,5,6]
// arr3=[...arr1,...arr2]
// console.log(arr3)




// distructring
// obj={
//     "name":"shivani",
//     "lastname":"singh",
//     "age":19
// }
// const {name,lastname}=obj
// console.log()


// map

const obj=[
    {name:"shivani",age:19},
    {name:"shivani",age:19},
    {name:"shivani",age:19}

]

const sum=0
obj.map((item)=>{
    console.log(item.age)
    sum+=item.age
})
console.log(sum)



// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.map((item)=>{
//     if(item%2==0){
//         console.log(item)
//     }

// })





// filter
// const arr=[1,2,3,4,5,6,7,8,9,10]
// const data=arr.filter((item)=>{
//     return item%2==0
// })
// console.log(data)


// const obj=[
//     {name:"shivani",age:19},
//     {name:"shivani",age:33},
//     {name:"shivani",age:47}

// ]

// const data=obj.filter((item)=>{
//     return item.age>40
// })
// console.log(data)

// reduce
// const arr=[1,2,3,4,5,6,7,8,9,10]
// const data2=arr.reduce((a,b)=>{
//     return a+b
// })
// console.log(data2)

// const obj=[
//     {name:"shivani",age:19},
//     {name:"shivani",age:33},
//     {name:"shivani",age:47}

// ]

// const data2=obj.reduce((initaialValue,currentElement)=>{
//     console.log(initaialValue,currentElement)
//     return initaialValue+currentElement.age
// },0)
// console.log(data2)
