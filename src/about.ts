import { SlashCommand, SlashCreator } from 'slash-create';

export default class AboutCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'about',
      description: 'display bot information',
      guildIDs: [process.env.GUILD_ID]
    });
  }

  async run() {
    return 'Run this command every 30 days to ensure that your Discord account maintains eligibility.';
  }
}
