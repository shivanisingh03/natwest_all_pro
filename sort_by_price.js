const div = document.querySelector('.container')
const displayData=(data)=>{
    div.innerHTML=""
    data.map((item,index)=>{
        div.innerHTML+=`<div>
        <h4>${item.title}</h4>
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



const reopenSite =async ()=>{
    const response =await fetch(`https://fakestoreapi.com/products`)
    const data =await response.json()
    console.log(data)
    displayData(data)
    
}

reopenSite()






const sorting =()=>{
    let api=`https://fakestoreapi.com/products`
    let data=async()=>{
        const response =await fetch(api)
        const result =await response.json()
        console.log(result)
        result.sort((a,b)=>{
            return a.price-b.price

        })
        displayData(result)
    }
    data()

}
sorting()


const ascending_order=()=>{
    let api=`https://fakestoreapi.com/products`
    let data=async()=>{
        const response =await fetch(api)
        const result =await response.json()
        console.log(result)
        result.sort((a,b)=>{
            return (b.price-a.price)


        })

        displayData(result)
    }
    data()


}
ascending_order()
