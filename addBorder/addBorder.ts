export function addBorder(picture: string[]): string[] {
    const ending= picture.length - 1;
    const begAst= "*";

    for(let i=0; i<picture.length; i++){
        picture[i]= begAst.concat(picture[i], begAst);
    }

    picture.unshift("*****");
    picture.push("*****");

    return picture;
}

// console.log(addBorder(["abc", "ded"]));

//.repeat() good for *****