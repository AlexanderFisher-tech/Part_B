const http = require("http")
const TimeStamp = require("./modules/utils")
const message = require("./lang/en.json")

class Server {
  static startServer(port)
  {
    const server = http.createServer((req, res) => {
      res.setHeader("Content-Type", "text/html")
  
      const currentTime = Server.getCurrentTime()
      const currentName = Server.getUrlName(req)
      const responseMessage = Server.createMessage(currentName, currentTime)

      res.end(responseMessage);
    })
    
    server.listen(port, () => {
      console.log("listening for requests")
    })
  }

  static createMessage(name, date)
  {
    const messageTemplate = message.greeting
    const filledMessage = messageTemplate.replace("%1", name).replace("%2", date)
    const formattedMessage = `<div style="color: blue;"> ${filledMessage} </div>`

    return formattedMessage
  }

  static getUrlName(req)
  {
    const parsedUrl = new URL(req.url, "http://localhost")
    const nameFromUrl = parsedUrl.searchParams.get("name")

    return nameFromUrl
  }

  static getCurrentTime() 
  {
    return TimeStamp.getDate()
  }
}
const PORT = process.env.PORT || 8080;

Server.startServer(PORT)