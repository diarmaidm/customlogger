function customLogger(req, res, next) {

    // Full request
    // console.log('\nreq:', req);

    console.log('\n***** Start Log Entry *****\n');

    console.log('Date:', + new Date());
    console.log('Date:', new Date().toUTCString());

    // user-agent
    console.log('req.headers["user-agent"]:', req.headers["user-agent"]);

    // request url
    console.log('req.url:', req.url);
    // console.log(`\nreq.url: ${req.url}`);

    // request method
    console.log('req.method:', req.method);

    // request host
    console.log('req.headers["host"]:', req.headers["host"]);
    console.log('req.hostname:', req.hostname);

    console.log('\n***** End Log Entry *****\n');

    next();
};

module.exports = customLogger;
