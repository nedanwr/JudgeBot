import {
    Client,
    Collection,
    IntentsBitField,
    Partials
} from "discord.js";
import { logger } from "../logger";

type ClientOptions = {
    token: string;
    prefix: string;
}

export class JudgeBot extends Client {
    commands = new Collection<string, any>();
    events = new Collection<string, any>();

    public constructor(options: ClientOptions) {
        super({
            partials: [
                Partials.User,
                Partials.Message,
                Partials.Channel,
                Partials.GuildMember,
                Partials.Reaction
            ],
            // Disable mentions by default
            allowedMentions: {
                parse: [],
                users: [],
                roles: [],
                repliedUser: false
            },
            // Intents
            intents: [
                // Privileged Intents
                IntentsBitField.Flags.GuildMembers,
                IntentsBitField.Flags.GuildMessageTyping,

                // Regular Intents
                IntentsBitField.Flags.DirectMessages,
                IntentsBitField.Flags.GuildBans,
                IntentsBitField.Flags.GuildEmojisAndStickers,
                IntentsBitField.Flags.GuildInvites,
                IntentsBitField.Flags.GuildMessageReactions,
                IntentsBitField.Flags.GuildMessages,
                IntentsBitField.Flags.Guilds,
                IntentsBitField.Flags.GuildVoiceStates
            ]
        });
        this
            .login(options.token)
            .catch((error: any | unknown) => {
                logger.error(error.message);
                process.exit(1);
            });
    }
}