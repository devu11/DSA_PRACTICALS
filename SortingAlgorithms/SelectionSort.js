function selectionSort(array){
    const len=array.length

    for(let i=0;i<len-1;i++)
    {
        let minIndex=i
        for(j=i+1;j<len;j++)
        {
            if(array[j]<array[minIndex])
            {
                minIndex=j
            }
}
            if(minIndex!==i)
            {
                [array[i],array[minIndex]]=[array[minIndex],array[i]]
            }
        }
        return array
    
}
const array=[8,9,0,4,2,1]
 console.log(array)
console.log(selectionSort(array))