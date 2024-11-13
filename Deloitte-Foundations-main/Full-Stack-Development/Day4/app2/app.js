const Logger = require("./logger");

const logger = new Logger();
logger.on('messageLogged',(arg)=>{
    console.log('Listener Called', arg);
});

logger.log('I am Vishwas');