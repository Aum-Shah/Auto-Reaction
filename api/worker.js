import TelegramBotAPI from "./TelegramBotAPI.js";
import { htmlContent, startMessage } from "./constants.js";
import { splitEmojis, returnHTML, getRandomPositiveReaction, getChatIds } from "./helper.js";

export default {
    async fetch(request, env, ctx) {
        const botToken = env.BOT_TOKEN;
        const botUsername = env.BOT_USERNAME;
        const Reactions = splitEmojis(env.EMOJI_LIST);
        const RestrictedChats = getChatIds(env.RESTRICTED_CHATS);

        const botApi = new TelegramBotAPI(botToken);

        if (request.method === 'POST') {
            const data = await request.json();
            try {
                await this.onUpdate(data, botApi, Reactions, RestrictedChats, botUsername);
            } catch (error) {
                console.log(error);
            }
        } else {
            return new returnHTML(htmlContent);
        }

        return new Response('Ok', { status: 200 });
    },

    async onUpdate(data, botApi, Reactions, RestrictedChats, botUsername) {
        let chatId, message_id, text;

        if (data.message || data.channel_post) {
            const content = data.message || data.channel_post;
            chatId = content.chat.id;
            message_id = content.message_id;
            text = content.text;

            if (data.message && (text === '/start' || text === '/start@' + botUsername)) {
                await botApi.sendMessage(chatId, startMessage.replace('UserName', content.chat.type === "private" ? content.from.first_name : content.chat.title), {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    "text": "Add Me To Channel ",
                                    "url": `https://t.me/${botUsername}?startchannel=true`
                                },
                                {
                                    "text": "Add Me To Group ",
                                    "url": `https://t.me/${botUsername}?startgroup=true`
                                }
                            ],
                            [
                                {
                                    "text": "Contact Owner ",
                                    "url": "https://t.me/WarFade"
                                }
                            ]
                        ]
                    }
                });
            } else if (data.message && text === '/reactions') {
                const reactions = Reactions.join(", ");
                await botApi.sendMessage(chatId, "<b> A R\n\n P E T T R A E I Y G/C F P F O B :</b> \n\n" + reactions, { parse_mode: 'HTML' });
            } else {
                if (!(RestrictedChats.includes(chatId))) {
                    await botApi.setMessageReaction(chatId, message_id, getRandomPositiveReaction(Reactions));
                }
            }
        }
    }
};