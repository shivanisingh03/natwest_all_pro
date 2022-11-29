const div=document.querySelector("#main")
const multiTable=()=>{
    // var table="<table>"
    // for(let i=1;i<=10;i++){
    //     table+="<tr>"
    //     for(let j=1;j<=20;j++){
    //         table+=`<td>${j}*${i}=${j*i}</td>`
    //     }
    //     table+="</tr>"
    // }
    // table+="</table>"
    // div.innerHTML=table


    
    for(let i=1;i<=20;i++){
        var table=""
        for(let j=1;j<=10;j++){
            // console.log(i,"x",j,"=",i*j)
            table+=`<p>${i}x${j}=${i*j}</p>`
        }
        div.innerHTML+=`<div id="table">${table}</div>`
    }
}

div.style.display="grid"
div.style.gridTemplateColumns="repeat(10,1fr)"

multiTable()





