# customlogger

This is express middleware that logs some example request details to console.

## Usage:

run `npm install --save customlogger` or `npm i -S customlogger`

In app.js, before the route handlers add the middleware reuire and use statement:
```
// Custom Middle ware to log out stuff
const customlogger = require('customlogger');
app.use(customlogger);
```

example console output:
```
***** Start Log Entry *****

Date: 1509582111837
Date: Thu, 02 Nov 2017 00:21:51 GMT
req.headers["user-agent"]: Mozilla Chrome Safari
req.url: /
req.method: GET
req.headers["host"]: 99.99.99.99:3000
req.hostname: 99.99.99.99

***** End Log Entry *****
```
