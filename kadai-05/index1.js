const profile ={
    name: "つぶ貝",
    age: 22,
    hobby: "ゲーム",
    major: "地理学",
}
const dictionary ={
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻",
}
const key of Object.keys(profile)
for (const key of keys){
    const subject = dictionary[key]
    const value =  profile[key]
    //console.log("私の名前は" + profle.name + "です")
    console.log(key)
    console.log("私の" + dictionary[key] + "は" + profile[key] + "です")
}