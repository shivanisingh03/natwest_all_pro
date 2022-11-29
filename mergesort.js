const submitBtn=document.querySelector(".submitBtn")

const mainMergeSort=()=>{
    const inputBox=document.querySelector(".inputBox")
    const container=document.querySelector(".container")
    var array = inputBox.value.split(",")
    function mergeSort(array){
        if(array.length>1){
            let middle=Math.floor(array.length/2)
            let left=array.slice(0,middle)
            let right=array.slice(middle,array.length)
            mergeSort(left)
            mergeSort(right)
            let leftIndex=0
            let rightIndex=0
            let  position=0
            while (leftIndex<left.length && rightIndex<right.length){
                if (left[leftIndex]<right[rightIndex]){
                    array[position]=left[leftIndex]
                    leftIndex=leftIndex+1
                }
                else{
                    array[position]=right[rightIndex]
                    rightIndex=rightIndex+1
                }
                position+=1
            }
            while (leftIndex<left.length){
                array[position]=left[leftIndex]
                position=position+1
                leftIndex=leftIndex+1
            }
            while (rightIndex<right.length){
                array[position]=right[rightIndex]
                position=position+1
                rightIndex=rightIndex+1
            }
        }
    }
    mergeSort(array)
    inputBox.value=""
    console.log(array)
    container.innerHTML+=`<h1>${array}</h1>`
    
}
submitBtn.addEventListener("click",mainMergeSort)





