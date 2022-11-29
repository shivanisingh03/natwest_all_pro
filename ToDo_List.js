const name=document.querySelector('.name')
const tableBody=document.querySelector('.tableBody')

let allData=[
    {
        name:"Shivani",

    },
    {
        name:"Shivani",
        
    }, {
        name:"Shivani",

    }

];
function editName(index){
   let editedText= prompt("Enter something")
   allData[index].name=editedText
   displayData()
}

function deleteRow(index){
    allData.splice(index,1)
    displayData()
}



function displayData(){
    tableBody.innerHTML="";
    allData.map((item,index)=>{
        tableBody.innerHTML+=`
        <tr>
        <td>${index.name}<button onclick= "editName(${index})">Edit</button></td>
        <td>${item.name}</td>
        <td><button onclick= "deleteRow(${index})"></button>Delete</td>

        `
    })
}



function storeData(){
    allData=[...allData,
    {
        "name":name.value,
    }];
    console.log(allData)
    displayData()

}

const submitBtn=document.querySelector('.submitBtn')
submitBtn.addEventListener('click',storeData)
displayData()