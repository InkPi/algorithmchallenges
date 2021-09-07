export function areSimilar(a: number[], b: number[]): boolean {
    let secondArr= [];

    for (let i=0; i< a.length; i++){
        if(a[i] === b[i]) {
            secondArr.push(b[i]);
        } else if (a[i] === b[i+1]){
            secondArr.push(b[i+1]);
        } else if (a[i] === b[i-1]) {
            secondArr.push(b[i-1]);
        }
    }

    if(a.toString() === secondArr.toString()) {
        return true;
    }
    return false;
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
