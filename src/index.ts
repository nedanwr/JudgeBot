import { JudgeBot } from "./struct/Client";
import { startUptimeCounter } from "./uptime";
const config = require("../config.json");

const client: JudgeBot = new JudgeBot({
    token: config.token,
    prefix: config.prefix,
});

// Start uptime counter once ready
client.once("ready", () => {
    startUptimeCounter();
});