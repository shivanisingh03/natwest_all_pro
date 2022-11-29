const inputBox=document.querySelector(".inputBox")
const submitBtn=document.querySelector(".submitBtn")
const container=document.querySelector(".container")
const calCulateResult=()=>{
    container.innerHTML+=""
    let resultString=inputBox.value.toLowerCase()
    let newString=""
    for (let i=0;i<resultString.length;i++){
        if(resultString[i]==" "){
            newString+=resultString[i+1].toUpperCase()
            i=i+1
        }
        else{
            newString+=resultString[i]
        }
    }container.innerHTML+=`<h1>${newString}</h1>`
}
submitBtn.addEventListener("click",calCulateResult)