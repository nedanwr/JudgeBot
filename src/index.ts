import { JudgeBot } from "./struct/Client";
const config = require("../config.json");

const client: JudgeBot = new JudgeBot({
    token: config.token,
    prefix: config.prefix,
});