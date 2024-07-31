<h1 align="center">❤️ Auto Reaction Bot ✨</h1>

<div align='center'>
  <a href='https://WarFade_rBot.t.me'>
    <img src='https://img.shields.io/badge/Demo-Workers-1cd760?logo=cloudflare&style=flat'>
  </a>
  <a href='https://t.me/WarFade_rBot'>
    <img src='https://img.shields.io/badge/Telegram-@WarFade__rBot-blue?logo=telegram&style=flat'>
  </a>
</div>

<h4 align="center">✨ Automate Your Telegram Chats with this Auto Reaction Bot! React to Messages Effortlessly! 🚀</h4>

<div align="center">
  Serverless deployment on Cloudflare - Free
  <br />
  <br />
  <a href="https://core.telegram.org/bots/api#setmessagereaction">Telegram API</a>
  ·
  <a href="https://core.telegram.org/bots/api#reactiontype">Supported Reactions</a>
  ·
  <a href="https://github.com/Aum-Shah/Auto-Reaction-Bot/issues/new">Report a Bug</a>
</div>

## ✨ Features
- Automatic Reactions ✓
- Supports Multiple Chats ✓
- Customizable Reactions ✓
- Efficient Real-Time Processing ✓
- Serverless Architecture ✓
- Supports Groups & Channels ✓
- Compliance with Telegram API Updates ✓
- Lightweight Code - Easy Setup ✓
- More Coming Soon...

## 🚀 Deploy on PaaS

Set all environment variables before deploying. - [Instructions](#-configuring-environments)

- [Deploy with Heroku](https://heroku.com/deploy)
- [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/Aum-Shah/Auto-Reaction-Bot)
- [Deploy to Render](https://render.com/deploy)

### ✅ Serverless - Free

- [Deploy with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/Aum-Shah/Auto-Reaction-Bot)
- [Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/?url=https://github.com/Aum-Shah/Auto-Reaction-Bot)

## 🚀 Deploy with Workers

Deploying this Telegram Auto Reaction Bot on Cloudflare is straightforward:

1. **Start the Deployment**:
   - Click the "Deploy to Cloudflare Workers" button [here](https://deploy.workers.cloudflare.com/?url=https://github.com/Aum-Shah/Auto-Reaction-Bot).

2. **Set up your Cloudflare account**:
   - If you do not have a Cloudflare account, you will be prompted to create one. Follow the on-screen instructions.

3. **Configure and Deploy**:
   - Once logged in, authorize the deployment and configure the Worker with the environment variables described below.
   - Review and adjust the Worker’s settings before finalizing the deployment.
   - Add repository secrets according to instructions before deployment.
   - After deployment, [Configure the Webhook](#-configure-the-webhook).

✅ **Demo**: Experience the Auto Reaction Bot in demo: [Auto Reaction Bot ✨](https://t.me/WarFade_rBot).

## 🚀 Deploy with GitHub Actions

Add repository secrets as follows:

After that, [Click Here](https://github.com/Aum-Shah/Auto-Reaction-Bot/actions/workflows/deploy.yml) to run the action.

## 🛠 Configuring Environments

To ensure the Telegram Auto-Reaction Bot operates correctly, configure these environment variables:

- `BOT_TOKEN`: Your bot's token from [BotFather](https://t.me/BotFather).
- `BOT_USERNAME`: The username set for your bot.
- `EMOJI_LIST`: A string of emojis the bot will use to react to messages, such as 👍❤🔥🥰👏😁🎉🤩🙏👌🕊😍🐳❤‍🔥💯⚡🏆.
- `RESTRICTED_CHATS`: List of chat IDs where the bot should not react (optional), separated by commas. Example: `-1001233434,3434234`.

## 🧩 Configure the Webhook

Open your web browser and enter the following URL (replace `<YourBotToken>` with your actual bot token and `https://your.cloudflare.worker.url/` with your Cloudflare Worker URL):

```
https://api.telegram.org/bot<YourBotToken>/setWebhook?url=https://your.cloudflare.worker.url/
```

**Verify the Webhook Configuration**:
To check if the webhook is set up correctly, navigate to:

```
https://api.telegram.org/bot<YourBotToken>/getWebhookInfo
```

## 🚀 Deploy Manually with Cloudflare Wrangler

### Prerequisites
You need git installed on your local machine.

### Step 1: Clone the Repository
Clone the repository and navigate to the project directory:

```
git clone https://github.com/Aum-Shah/Auto-Reaction-Bot.git
cd Auto-Reaction-Bot
```

### Step 2: Configure `wrangler.toml`
Edit the `wrangler.toml` file with your environment variables. Replace placeholder values with actual data: [🛠 Configuring Environments](#-configuring-environments).

### Step 3: Install Cloudflare Wrangler
Install Cloudflare Wrangler following the [official documentation](https://developers.cloudflare.com/workers/wrangler/install-and-update/).

### Step 4: Deploy Using Wrangler
Deploy your project with:

```
wrangler publish
```

Configure the webhook after deployment. The bot will start reacting to messages in Telegram chats as configured.

## 🎯 Credits and Other
- Based on [Telegram BOT API](https://core.telegram.org/bots/api)
- Built with 💖 by [Single Developers </>](https://t.me/SingleDevelopers)

## ⚖️ License
MIT: [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)