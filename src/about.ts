import { CommandContext, SlashCommand, SlashCreator } from 'slash-create';
import schedule, { Job } from 'node-schedule';

export default class AboutCommand extends SlashCommand {
  private scheduledJob?: Job;

  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'about',
      description: 'display bot information',
      guildIDs: [process.env.GUILD_ID]
    });
  }

  async run(ctx: CommandContext) {
    if (this.scheduledJob) {
      this.scheduledJob.cancel();
    }

    const user = ctx.user;
    const futureDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    this.scheduledJob = schedule.scheduleJob(futureDate, async () => {
      await ctx.send({
        content: `Hey <@${user.id}>, it has been 30 days since you last ran /about! Make sure to run the command in order to maintain eligibility for the badge.`
      });
    });

    await ctx.send('Run this command every 30 days to ensure that your Discord account maintains eligibility.');
  }
}
