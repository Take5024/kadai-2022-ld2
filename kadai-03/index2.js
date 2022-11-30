//const number = 10000
//console.log(number)

//for (let yakusuu = 2; number <= 10000; number = number + 1){
    //let isPrime = true
    //if(number % yakusuu === 0){
       // console.log(number,'は' yakusuu, 'で割り切れるので素数ではありません')
        //break
    //}
//}
//if(isPrime) {
    //console,log(number, '素数です')
//}

let sum1 = 0
let sum2 = 0

for (let number = 2; number <= 10000; number = number + 1) {

    let isPrime = true
    for (let yakusu = 2; yakusu < number; yakusu++) {
        if (number % yakusu === 0) {
            isPrime = false
            console.log(number, 'は', yakusu, 'で割り切れるのでエラトステネスの篩に引っかかる')
            break
        }
    }

    if(isPrime) {
        console.log(number, 'エラトステネスの篩をすり抜ける')
        if(number % 3 === 1) {
            sum1 = sum1 + number
        }
        if(number % 3 === 2) {
            sum2 = sum2 + number
        }
    }
}
