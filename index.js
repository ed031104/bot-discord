const {Client, GatewayIntentBits, Partials, Collection, Message} = require('discord.js');
const config = require( './config.json');


const client = new Client({
    intents:[Object.keys(GatewayIntentBits)],
    partials:[Object.keys(Partials)],
});

client.setMaxListeners(0);

client.on('messageCreate', async (message)=>{
    if(message.content === 'hola'){
       return message.reply({content: `Hola, ¿Cómo estás? ${message.author}`}) 
    }if(message.content === 'server'){
        return message.reply({content:
       `El server de minecraft es:
        IP: NosotrosUNI_Rgx.aternos.me:52706
        Puerto: 52706
        IP Dinámica: snailfish.aternos.host:52706  
        ${message.author}`})
    }
 })

client.login(config.token).then(() => {
    console.log(`${client.user.username} Esta online.`);
}).catch((err) => {
    console.log(err);
}) ;