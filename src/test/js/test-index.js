const log4js = require('log4js')
const { configure, jsAppender } = require('@teragrep/jsa_01')

//console.log(jsAppender)

log4js.configure( {
    appenders: {
      jsa: { 
      type: '@teragrep/jsa_01',
      appName: 'teragrep',
      serverAddress:'127.0.0.1',
      serverPort: 1601,

     },
    console: { type: 'console' },
  },
  categories: {
    jsa: { appenders: ['jsa'], level: 'error' },
    default: { appenders: ['jsa'], level: 'trace' },
  },
})

const logger = log4js.getLogger('jsa');
logger.fatal("Welcome to teragrep log4js Demo over RELP!"); 
console.log = () => { }; // This hides all the logging detail behind the rlp_02