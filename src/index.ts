import { JudgeBot } from "./struct/Client";
import { startUptimeCounter } from "./uptime";
import { loadEvents } from "./utils/loadEvents";

const client: JudgeBot = new JudgeBot();

// Start uptime counter once ready
client.once("ready", () => {
    startUptimeCounter();
});

// TODO: use top level await if we switch to ESM
void client
    .login(client.config.botSettings().token)
    .then(async () => {
        await loadEvents(client);
    });