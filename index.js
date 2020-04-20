const Discord = require('discord.js')
const client = new Discord.Client()
const dotenv = require('dotenv'),
      path   = require('path')
dotenv.config({path: path.join(__dirname, '../.env')})

client.on('ready', () => {
    // Set bot status to: "Watching for a &help in chat"
    client.user.setActivity("for a &help in chat", {type: "WATCHING"})
	
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

client.on('message', (receivedMessage) => {
	if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        testCommand(receivedMessage);
		return
    }
	let n = receivedMessage.content.indexOf('h')
	if (n == -1) {
        return
    }
	else{
		for(var i=0;i<1000;++i) console.log('1');
		testCommand(receivedMessage);
		return
	}
})

function testCommand(receivedMessage) {
    receivedMessage.channel.send("&test");
}

bot_secret_token = process.env.DISCORD_BOT_TOKEN;
console.log(bot_secret_token);
var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');
}).listen(process.argv[2]);
console.log('Server running at http://127.0.0.1:' + process.argv[2]);
client.login(bot_secret_token)