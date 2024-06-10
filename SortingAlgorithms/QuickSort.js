function quicksort(array){
    if(array.length<2){
        return array
    }
    let pivot=array[array.length-1]
    const left=[]
    const right=[]
    for(let i=0;i<array.length-1;i++){
        if(array[i]<pivot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return[...quicksort(left),pivot,...quicksort(right)]
}

const array=[3,1,9,0,2,10,100,29,33,21]
console.log(quicksort(array))
