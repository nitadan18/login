import winston, { format } from 'winston';

const logConfiguration = {
    levels: winston.config.syslog.levels,
    format: format.combine(
        format.colorize({ all: true }),
        format.timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        format.align(),
        format.printf(
            (info) => `[${info.timestamp}] ${info.level}: ${info.message}`,
        ),
    ),
    transports: [new winston.transports.Console()],
    exceptionHandlers: [new winston.transports.Console()],
};

const logger = winston.createLogger(logConfiguration);

export default logger;
