export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let yourStrongest= 0;
    let yourWeakest= 0;
    let friendsStrongest= 0;
    let friendsWeakest= 0;
    
    if (yourLeft > yourRight){
        yourStrongest= yourLeft;
        yourWeakest= yourRight;
    } else {
        yourStrongest= yourRight;
        yourWeakest= yourLeft;
    }

    if (friendsLeft > friendsRight){
        friendsStrongest= friendsLeft;
        friendsWeakest= friendsRight;
    } else {
        friendsStrongest= friendsRight;
        friendsWeakest= friendsLeft;
    }

    if(yourStrongest === friendsStrongest && yourWeakest === friendsWeakest){
        return true;
    } else {
        return false;
    }
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
