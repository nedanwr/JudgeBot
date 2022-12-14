import {
    Client,
    Collection,
    IntentsBitField,
    Partials
} from "discord.js";
import { ConfigManager } from "../managers/config";

export class JudgeBot extends Client {
    commands = new Collection<string, any>();
    events = new Collection<string, any>();

    public readonly config: ConfigManager;
    public readonly prefix: string;

    public constructor() {
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
        this.config = new ConfigManager(this);
        this.prefix = this.config.botSettings().prefix;
    }
}