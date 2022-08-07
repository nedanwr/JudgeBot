import { JudgeBot } from "../struct/Client";
import { logger } from "../logger";

module.exports = async (client: JudgeBot) => {
    logger.info(`${client.user?.username} is ready to pass out judgements!`);

    try {
        void client.user?.setPresence({
            status: client.config.presenceSettings().status,
            activities: [
                {
                    name: client.config.presenceSettings().message,
                    type: client.config.presenceSettings().type as any,
                }
            ],
        });
    }
    catch (err: any | unknown) {
        logger.error(`Failed to set startup presence: ${err.message}`);
    }
}