// const input1=document.querySelector(".input1")
// const input2=document.querySelector(".input2")
// const result=document.querySelector(".result")
// const submitBtn=document.querySelector(".submitBtn")
// const container=document.querySelector(".container")



// submitBtn.addEventListener('click',()=>{
//     console.log(input1.value)
//     console.log(input2.value)
//     const num1=Number(input1.value)
//     const num2=Number(input2.value)




// })

const input1=document.querySelector(".input1")
const submitBtn=document.querySelector(".submitBtn")
const container=document.querySelector(".container")
let arr=[]
const dispalyTodos=()=>{
    container.innerHTML=""
    for(i=0;i<arr.length;i++){
        container.innerHTML+=`<h1>${arr[i]}</h1>`

    }


}

const addTodo=()=>{
    const todo=input1.value
    if(todo.trim()!=""){
        arr.push(todo.trim())
        console.log(arr)

    }
    input1.value=""
    dispalyTodos()

}

submitBtn.addEventListener('click',addTodo)
