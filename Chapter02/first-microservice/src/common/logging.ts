import * as winston from 'winston';

export const logger =  winston.createLogger({
  
});

const env = 'development';

// Development Logger
if(env === 'development') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

process.on('unhandledRejection', function (reason, p) {
  logger.warn('system level exceptions at, Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});
