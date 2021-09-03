export function almostIncreasingSequence(sequence: number[]): boolean {
    let result=[];
    let prevSeq= 0;

    for(let i= 1; i < sequence.length; i++){
        prevSeq= i-1;
        
        result= sequence.filter(seq=> seq < sequence[prevSeq]);
    }

    if(result.length != sequence.length-1) {
        return false;
    }
    return true;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// console.log(almostIncreasingSequence([1, 3, 2])) 