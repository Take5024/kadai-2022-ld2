//自分で考えた方↓　5秒後を5000と表記
setTimeout(
    () => {console.log("hallo")},
    3000
)

setTimeout(
    () => {console.log("bye")},
    5000
)

setTimeout(() => {
    console.log("Hello!")
    setTimeout(() => {
        console.log("Bye")
    }, 2000)
}, 3000)