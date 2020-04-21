const Discord = require('discord.js')
const client = new Discord.Client()
const dotenv = require('dotenv'),
      path   = require('path')
dotenv.config({path: path.join(__dirname, '../.env')})
const request = require('request');

client.on('ready', () => {
    // Set bot status to: "Watching for a &help in chat"
    client.user.setActivity("for a <SECRET> in chat", {type: "WATCHING"})
	
})


client.on('message', (receivedMessage) => {
	if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        //testCommand(receivedMessage);
		return
    }
	let fullCommand = receivedMessage.content;
	if (fullCommand == "ea275938-1b07-4633-9db2-52e78bd38e14"){
		receivedMessage.channel.send("&848b3356-d38b-4ca3-88d8-7e0303337f1b");
	}
	wakeBot();
})

function wakePartnerBot(){
	// Insert url of other bot here
	request('https://bbcs-discord-bot.herokuapp.com', { json: false }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  //console.log(body.url);
	  //console.log(body.explanation);
	});
	console.log("request sent");
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