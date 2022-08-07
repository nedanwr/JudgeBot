import { JudgeBot } from "./struct/Client";
import { startUptimeCounter } from "./uptime";
import { loadEvents } from "./utils/loadEvents";
const config = require("../config.json");

const client: JudgeBot = new JudgeBot({
    token: config.token,
    prefix: config.prefix,
});

// Load Events
loadEvents(client);

// Start uptime counter once ready
client.once("ready", () => {
    startUptimeCounter();
});