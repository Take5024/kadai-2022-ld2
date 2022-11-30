//const number = parseInt(process.argv[2])
//console.log(number)

//for (let yakusuu = 2; index < number; yakusuu++){
    //if(number % yakusuu === 0){
       // console.log(number,'は' , yakusuu, 'で割り切れるので素数ではありません')
       // break
    //}
//}
//if(isPrime) {
    //console,log(number, '素数ではない')
//}

//if(number % 2 === 0){
    //console.log("エラトステネスの篩")
//} else if(number % 3 === 0){
   // console.log("エラトステネスの篩わない")
//}

const number = parseInt(process.argv[2])

let isPrime = true
for (let yakusu =2; yakusu < number; yakusuu++){
    if(number % yakusu === 0){
        isPrime = false
        console.log(number, 'は', yakusu, 'で割り切れるので素数ではありません')
        break
    }
}
if(isPrime) {
    console.log(number, 'は素数です')

}