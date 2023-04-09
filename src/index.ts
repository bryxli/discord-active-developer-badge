import dotenv from 'dotenv';
import { AnyRequestData, SlashCreator, GatewayServer } from 'slash-create';
import path from 'path';
import CatLoggr from 'cat-loggr/ts';
import Eris from 'eris';

let dotenvPath = path.join(process.cwd(), '.env');
if (path.parse(process.cwd()).name === 'dist') dotenvPath = path.join(process.cwd(), '..', '.env');

dotenv.config({ path: dotenvPath });

const logger = new CatLoggr().setLevel(process.env.COMMANDS_DEBUG === 'true' ? 'debug' : 'info');
const client = new Eris.Client(process.env.DISCORD_BOT_TOKEN);
const creator = new SlashCreator({
  applicationID: process.env.DISCORD_APP_ID,
  publicKey: process.env.DISCORD_PUBLIC_KEY,
  token: process.env.DISCORD_BOT_TOKEN,
  client
});

creator.on('debug', (message) => logger.log(message));
creator.on('warn', (message) => logger.warn(message));
creator.on('error', (error) => logger.error(error));

creator.on('synced', () => logger.info('Commands synced!'));

creator.on('commandRun', (command, _, ctx) =>
  logger.info(`${ctx.user.username}#${ctx.user.discriminator} (${ctx.user.id}) ran command ${command.commandName}`)
);

creator.on('commandRegister', (command) => logger.info(`Registered command ${command.commandName}`));

creator.on('commandError', (command, error) => logger.error(`Command ${command.commandName}:`, error));

creator
  .withServer(
    new GatewayServer((handler) => {
      client.on('rawWS', (event) => {
        if (event.t === 'INTERACTION_CREATE') handler(event.d as AnyRequestData);
      });
    })
  )
  .registerCommandsIn(path.join(__dirname, 'commands'))
  .syncCommands();

client.connect();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
});
