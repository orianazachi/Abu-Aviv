const express = require("express")
const app = express()
app.get("/", (req, res) => {
  res.send("דור השמן")
})

app.listen(3000, () => {
  console.log("Project is Ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setActivity('אביחי ציפורי', { type: 'WATCHING' });
})
client.on("message", message => {
  if (message.content === "פרה") {
    message.channel.send("מווווווווווו")
  }
})

client.on("message", message => {
  if (message.content === "חתול") {
    message.channel.send("מיאווווווו")
  }
})
client.on("message", message => {
  if (message.content === "כבשה") {
    message.channel.send("מהאהאהאהאהאהאה")
  }
})

client.on("message", message => {
  if (message.mentions.has(client.user)) {
    let answers = ["ארנביםםםם", "מונית", "למבורגיני", "פרארי", "צהוב", "ירוק", "כחול", "לבן", "שחור", "אנטילופה זאת חיה", "רייייייייייייייייייייייייייייייייייייייייייייייייייייייייייייי", "כע אני אוהב אבטיחים", "לאונרדו דיקפריו", "יהודה לוי", "כן", "לא", "בוודאי", "כמובן", "ברור", "איכס לא", "ממש לא", "רק אולי", "כדור", "למה שתשאל/י אם אני אוהב אבטיח", "את/ה מצפה שאני אענה על זה"]
    message.channel.send(`${answers[Math.floor(Math.random() * answers.length)]}`)
  }
})

client.on("message", message => {
  if (message.content === "רוצה לאכול איתי גזר") {
    message.channel.send("כע בוא נאכל גזר")
  }
})

client.on("message", message => {
  if (message.content === "אנטילופה") {
    message.channel.send("אין לי באמת כוח לבדוק איזה קול אנטילופה עושה")
  }
})

client.on("message", message => {
  if (message.content === "אבטיח") {
    message.channel.send("אגס")
  }
})



client.on("message", message => {
  if (message.content.endsWith("משפט חוכמה")) {
    let answers = [, "אפי הנמר הוא בעצם תפוז", "חחחחחחחחחחחחחחחחחחחחח", "פטריק קם ב3 בבוקר לאכול קציצת סרטן אבל לפתע מגלה שהקציצה היא בעצם קולה", "אסם", "קולה זה בעצם מים בצבע חום אבל בלי סוכר", "יש לי אבטיח בתה", "אימוג'י הוא בעצם פרצוף מחייך עם דמעות שמחה", "יוגב הוא בעצם ג'וק, אבל ג'וק הוא לא חגב", "נמר בצורת עכביש", "כוס המים שלי ב2 בלילה", "ארנב הוא בעצם נמר אבל היא נמר בצבע ירוק", "עגיל הוא עיגול", "יש לך ריח של מלפפון חמוץ", "מגבונים שהם לא מגבונים הם נייר טואלט", "אם ג'וק מביא לך ג'וק אז תאכל את הג'וק", "פיצה זה טעים ואני ממש מדהים", "החומוס הוא עגול וגם כדור הארץ הוא עגול"]
    message.channel.send(`${answers[Math.floor(Math.random() * answers.length)]}`)
  }
})




client.on("message", message => {
  if (message.content === "היי") {
    message.channel.send("הייייייייייייייייייייייי")
  }
})



client.on("message", message => {
  if (message.content === "אבטיח זה טעים") {
    message.channel.send("אבטיח זה כלכך טעים")
  }
})


client.on("message", message => {
  if (message.content === "מי אתה") {
    message.channel.send("אני עבו אביב הבוט נו")
  }
})


client.on("message", message => {
  if (message.content === "כלב") {
    message.channel.send("כלבים זה אוברייטד")
  }
})


client.on("message", message => {
  if (message.content === "שרק") {
    message.channel.send("שרק המלךךךךךךךךךך")
  }
})


client.on("message", message => {
  if (message.content === "כן או לא") {
    let answers = ["לא", "כן"]
    message.channel.send(`${answers[Math.floor(Math.random() * answers.length)]}`)
  }
})

client.login("ODAyODMzMDg3MjEzNjAwNzY4.GYuyx0.gmZ_k5duGzmhMyEccD9XSzyFY96zJm0zpSwj9g")