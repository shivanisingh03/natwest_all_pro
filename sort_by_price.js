const div = document.querySelector('.container')
const submitBtn=document.querySelector(".sortBtn")

const displayData=(data)=>{
    div.innerHTML=""
    data.map((item,index)=>{
        div.innerHTML+=`<div>
        <h1>${item.title}</h1>
        <img src=${item.image} />
        <p>${item.description}</p>
        <button>$${item.price}</button>
        <button>Rating - ${item.rating.rate}</button>
        </div>`

    })
}
const callApi =async ()=>{
    const response =await fetch(`https://fakestoreapi.com/products`)
    const data =await response.json()
    console.log(data)
    displayData(data)
    
}

div.style.display="grid"
div.style.gridTemplateColumns="repeat(4,1fr)"
callApi()



submitBtn.addEventListener('click',callApi)



