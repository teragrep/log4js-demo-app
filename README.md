![Teragrep Logo](https://avatars.githubusercontent.com/u/71876378?s=200&v=4)

# Log4js Demo App


## Teragrep jsAppender for Log4js

This is a demo app shows that jsAppender will send every log message it recived to a java-relp-server, over RELP protocol.

## Install jsAppender

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






