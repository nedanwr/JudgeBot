import { JudgeBot } from "../struct/Client";
import { readdirSync } from "fs";
import { join } from "path";
import { logger } from "../logger";

// If in prod, use .js else .ts
const ENV_MODE_FILE_EXT: string =
    process.env.NODE_ENV === "production" ? ".js" : ".ts";

export const loadEvents = async (client: JudgeBot) => {
    const eventFiles = readdirSync(join(__dirname, "../events")).filter((file: string) => file.endsWith(ENV_MODE_FILE_EXT));
    for (const file of eventFiles) {
        const event: any = require(`../events/${file}`);
        const eventName: string | undefined = file.split(".").shift();
        client.on(eventName!, event.bind(null, client));
        delete require.cache[require.resolve(`../events/${file}`)];
        logger.info(`[Event] ${eventName} event loaded`);
    }
}