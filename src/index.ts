import dotenv from 'dotenv';
import { AnyRequestData, GatewayServer, SlashCreator } from 'slash-create';
import Eris from 'eris';
import AboutCommand from './about';
import express from 'express';

dotenv.config({ path: '.env' });

const client = new Eris.Client(process.env.DISCORD_BOT_TOKEN);
const creator = new SlashCreator({
  applicationID: process.env.DISCORD_APP_ID,
  publicKey: process.env.DISCORD_PUBLIC_KEY,
  token: process.env.DISCORD_BOT_TOKEN,
  client
});

creator
  .withServer(
    new GatewayServer((handler) => {
      client.on('rawWS', (event) => {
        if (event.t === 'INTERACTION_CREATE') handler(event.d as AnyRequestData);
      });
    })
  )
  .registerCommand(AboutCommand)
  .syncCommands();

client.connect();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
  client.editStatus('idle', { name: '/about', type: 0 });
});

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('uptimerobot');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
