export function arrayPreviousLess(items: number[]): number[] {
    let lessArr= [];
    var lastNum = items.length - 1;

    items.unshift(items[lastNum]);

    for(let i=1; i < items.length; i++){
        if (items[i] < items[i-1]){
            lessArr.push(-1);
        } else 
        {lessArr.push(items[i-1]);}
    }

    return lessArr;
}

// console.log(arrayPreviousLess([3, 5, 2, 4, 5]));