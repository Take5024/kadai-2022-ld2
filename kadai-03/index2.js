const number = 10000
console.log(number)

for (let yakusuu = 2; number <= 10000; number = number + 1){
    let isPrime = true
    if(number % yakusuu === 0){
        console.log(number,'は' yakusuu, 'で割り切れるので素数ではありません')
        break
    }
}
if(isPrime) {
    console,log(number, '素数です')
}
