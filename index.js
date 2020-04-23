const Discord = require('discord.js')
const client = new Discord.Client()

/* requirements to read bot token as environmental variable */
const dotenv = require('dotenv'),
      path   = require('path')
dotenv.config({path: path.join(__dirname, '../.env')})

// requirements to keep partner bot awake
const request = require('request');


bot_secret_token = process.env.DISCORD_BOT_TOKEN;
console.log(bot_secret_token);
var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');
}).listen(process.argv[2]);
console.log('Server running at http://127.0.0.1:' + process.argv[2]);
client.login(bot_secret_token)

let COUNTER = 20;

client.on('ready', () => {
    // Set bot status to: "Watching for a &help in chat"
    client.user.setActivity("for a <SECRET> in chat", {type: "WATCHING"});
	let toggler = setInterval(sendMessage, 1000);
	
})


client.on('message', (receivedMessage) => {
	let fullCommand = receivedMessage.content;
	if (receivedMessage.author == client.user) { // Make bot delete the countdowns
		if (fullCommand != "&848b3356-d38b-4ca3-88d8-7e0303337f1b") receivedMessage.delete();
		return
    }
	return;
	if (fullCommand == "ea275938-1b07-4633-9db2-52e78bd38e14"){
		if (STATE) receivedMessage.channel.send("&848b3356-d38b-4ca3-88d8-7e0303337f1b");
	}
	//wakePartnerBot();
})

function sendMessage(){
	if (COUNTER>0){
		client.channels.cache.get('701792754371395655').send(COUNTER);
		COUNTER-=1;
	}
	else{
		client.channels.cache.get('701792754371395655').send('&848b3356-d38b-4ca3-88d8-7e0303337f1b');
		wakePartnerBot();
		COUNTER = 20;
	}
}

function wakePartnerBot(){
	// Insert url of other bot here
	var bot_url = 'https://bbcs-discord-bot.herokuapp.com';
	request(bot_url, { json: false }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  //console.log(body.url);
	  //console.log(body.explanation);
	});
	console.log("request sent to "+bot_url);
}

