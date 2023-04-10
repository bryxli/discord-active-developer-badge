<div style="display: flex; align-items: center;">
  <img src="public/badge.svg" width="75" height="75">
  <span style="font-size: 2.5em">Discord Active Developer Badge Bot</span>
  <img src="public/badge.svg" width="75" height="75">
</div>

Simple Discord bot to get the Discord "Active Developer Badge" and maintain eligibility.

---

## Description

The Discord Active Developer Badge is a badge on your Discord profile recognizing you for being an active developer.

One condition to maintain this badge is that the bot must be interacted with at least once a month. This bot provides a fast and easy way to get the badge and keep the Discord bot running 24/7 to easily re-run the command every month.

There is no programming required to set this up. Simply create the bot and host it on Replit using the pre-written code in this repository.

## Getting Started

### Useful Links

* [Discord Application](https://discord.com/developers/applications)
* [Replit](https://replit.com/)
* [UptimeRobot](https://uptimerobot.com/dashboard?ref=website-header#mainDashboard)

### Discord

1. Create a new Discord Application

    ![App](public/create_application.png)

2. Create a new Bot in Settings &rarr; Bot

    ![Bot](public/create_bot.png)

3. Generate Discord invite link through Settings &rarr; OAuth2 &rarr; URL Generator

    ![Invite](public/scopes.png)

    The URL can be found on the bottom of the page under `Generated URL`. Invite the Discord bot to your **community** server. The server must be a community server to ensure that you get the active developer badge.

Write down the application ID, public key, and bot token. You will need these later when configuring on Replit.

### Replit

1. Create a new Repl on Replit

    ![Repl](public/create_repl.png)

2. Import the Repl code from GitHub

    ![Import](public/import_from_github.png)

3. Enter `github.com/bryxli/discord-active-developer-badge` as GitHub URL

    ![GitHubURL](public/enter_github_url.png)

4. Click Import from GitHub

5. Replit will now ask for the command to run the bot, keeping the default of `npm run start` is okay.

    ![Configure](public/configure_run.png)

6. Just to make sure everything was set up properly run `yarn`

    ![Dependencies](public/dependencies.png)

7. Create a new secret using the Secrets tool

    ![Secret](public/secrets.png)

8. Enter secret information using [raw JSON](/secret.json) with the secrets obtained earlier.

    ![JSON](public/json.png)

9. Run the bot

    ![Run](public/run.png)

### UptimeRobot

1. Create a new monitor on UptimeRobot

    ![Monitor](public/new_monitor.png)

    The URL can be found on Replit after running the bot in Webview

    ![URL](public/webview.png)

### The Badge

1. Claim the Active Developer Badge [here](https://discord.com/developers/active-developer). It can take up to 24 hours for the application to be considered active.

    ![Claimed](public/claimed.png)