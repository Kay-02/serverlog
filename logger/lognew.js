const { format, createLogger, transports } = require('winston');
const{timestamp, combine, json, errors} = format;

function lognew() {
    const logFormat = printf(({level, label, message, timestamp}) => 
    {return '${timestamp} ${level}: ${message}'
    });


    return createLogger({
     format: combine(
        json(),
        format.colorize(),
        timestamp({format: 'HH:mm:ss || DD-MM-YYYY '}),
        logFormat,
        errors({stack: true})),
    defaultMeta: { services: 'user-services'},
    transports: [ new transports.Console()],
});

}

module.exports = logger;