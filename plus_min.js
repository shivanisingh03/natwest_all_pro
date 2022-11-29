const inputBox1=document.querySelector("#inputBox1")
const inputBox2=document.querySelector("#inputBox2")
const submitBt=document.querySelector("submitBt")
const container=document.querySelector("#container")

const addTwoElements=()=>{
    add=(Number(inputBox1.value)+Number(inputBox2.value))
    container.innerHTML+=`<h1>${add}</h1>`


}
Addition.addEventListener('click',addTwoElements)


const addTwoElements1=()=>{
    sub=(Number(inputBox1.value)-Number(inputBox2.value))
    container.innerHTML+=`<h1>${sub}</h1>`


}
Substraction.addEventListener('click',addTwoElements1)

const addTwoElements2=()=>{
    mul=(Number(inputBox1.value)*Number(inputBox2.value))
    container.innerHTML+=`<h1>${mul}</h1>`

}
Multiplication.addEventListener('click',addTwoElements2)


const addTwoElements3=()=>{
    div=(Number(inputBox1.value)/Number(inputBox2.value))
    container.innerHTML+=`<h1>${div}</h1>`

}
Division.addEventListener('click',addTwoElements3)






























