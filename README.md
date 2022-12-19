# Pinky Flutter Action

Pinky allows you to deploy flutter apk to various platform at ease. Currently, we support. 

- Telegram
- Slack
- Discord

## Inputs

| Name                  | Required | Description                                                                                                                                       |
|-----------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| flutter_version       | `false`  | Specify the current version of flutter your project uses |
| flutter_channel       | `false`  | Specify the channel your project support                                                                                                            |
| path                  | `true`  | Specify where your generated apk or ipa file is located                                             |
| slack_token           | `false`  | Your slack bot auth token                     |
| telegram_token        | `false`  | Your telegram bot token generated by bot father   |
| telegram_chat_id      | `false`  | The id of the channel you want the apk to be send to                                                                                                          |
| channel               | `false`  | The slack channel name you want the apk to be send to                        |
| filename              | `false`  | The name you want to give to the file  |
| comment               | `false`  | The message you want to attach to the file while sending it                                                                                                                                |
| webhook_url     | `false`  |  Your discord webhook url.                                                                                                                             |


## Usage

The following give you a preview of the set up

`````yaml
on: [push]

jobs:
    runs-on: ubuntu-latest
    name: Pinky Test
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Generate Flutter apk
        uses: ./ 
        with:
          slack_token: ${{ secrets.SLACK_TOKEN }}
          path:  build/app/outputs/flutter-apk/app-release.apk
          channel: general
          filename: app-armeabi-v7a-debug.apk
          filetype: apk
          comment: "New Release"
          telegram_token: ${{ secrets.TELEGRAM_TOKEN }}
          telegram_chat_id: ${{ secrets.TELEGRAM_CHAT_ID }}
          webhook_url: ${{ secrets.WEBHOOK_URL }}

`````

## Setting up  Telegram

> We planning to have our custom chatbot who does the work automatically.After the next update, you will automate things at ease.


- <details>
  <summary> Create a bot with BotFather.</summary>
  <ul>
   <li>Start a new conversation with the <a href="https://telegram.me/ botfather">`BotFather`</a></li>

   <li>Send /newbot to create a new Telegram bot.</li>

   <li>When asked, enter a name for the bot.</li>

   <li>Give the Telegram bot a unique username. Note that the bot name must end with the word "bot" (case-insensitive).</li>

   <li>Copy and save the Telegram bot's access token for later steps.</li>
  </ul>
</details>


- Provide the access token to our `telegram_token`

- Copy your channel id. The channel you want the apk to be sent to. ( Make sure the bot has been added over there).


## How to get the telegram channel id

> Skip step 2 if your channel is public

  1. log in under your account at web version of [`Telegram`](https://web.telegram.org). Incase your channel is public, just copy the channel name as the `telegram_chat_id`.

  2. Find your channel. See to your URL. It should be like https://web.telegram.org/z/#-1543515057.

  3. Grab "1543515057" from it, and add "-100" as a prefix.


## Setting up Discord

> Note that, discord has file limit size(8mb) for channels which has no booster

 - Watch this [`video`](https://www.youtube.com/watch?v=wzdZLWonn0Y) to learn how to get your webhook. 
 - Copy the webhook link and provide it to `webhook_url`

 That all you need to get discord to work.



Show some ❤️ and star the repo



