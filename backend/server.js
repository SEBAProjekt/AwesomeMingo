/**
 * Created by nicol on 08.06.2016.
 */
var Config = require('./config/config');
var app = require('./app');

/**
 * Start the server
 */

app.listen(Config.app.port);

