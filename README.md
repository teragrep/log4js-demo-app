![Teragrep Logo](https://avatars.githubusercontent.com/u/71876378?s=200&v=4)

# Log4js Demo App


## Teragrep jsAppender for Log4js

This is a demo app shows that jsAppender will send every log message it received to a java-relp-server, over RELP protocol.

## Steps
- Install the required packages / dependencies
     RLO_08 - Syslog format
     RLP_02 - RELP Connection
     JSA_91 - Appender

- Configure the Log4js appender to use jsa_01 and further settings 

### Install jsAppender

```cmd
npm install @teragrep/jsa_01
```


## Example (configuration)

```javascript

log4js.configure( {
    appenders: {
      jsa: { 
      type: '@teragrep/jsa_01',
      appName: 'teragrep',
      serverAddress: 'localhost'
      serverPort: 1601,
     },
    console: { type: 'console' },
  },
  categories: {
    jsa: { appenders: ['jsa'], level: 'error' },
    default: { appenders: ['jsa'], level: 'trace' },
  },
})

```
This will transform the every log messages to RFC5424 Sylog format and send to the RELP compatible server.  





