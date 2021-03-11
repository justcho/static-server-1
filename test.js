const fs = require('fs')

//读数据库
const usersString=fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString) //反序列化 字符串回到对象
// 写数据库
const user3={id:3, name:"july", password: "ssss"}
usersArray.push(user3)
const string = JSON.stringify(usersArray) //序列化  对象到字符串
fs.writeFileSync('./db/users.json',string)
