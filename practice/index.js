for (let i = 0; i < 100 ; i = 1 + i ){
    console.log(i)
}

for (let i = 0; i < 101 ; i = 1 + i ){
    if(i === 51){
        break
    }
    console.log(i)
}

let count1 = 0
while (count1 < 3){
    console.log("こんにちは", count1)
    count1 = count1 + 1
}

let count2 = 0
do {
    console.log("今日は", count2)
    count2 = count2 + 1
}while (count2 < 3);

