/**
 * Created by nicol on 08.06.2016.
 */
var Config = {};
Config.db = {};
Config.app={};
Config.auth = {};

Config.db.host = 'localhost:27017';
Config.db.name = 'mingodb';

// Use environment defined port or 3000
Config.app.port = process.env.PORT || 3000;

Config.auth.jwtSecret = "dXBsXF_ppV4DePZHKrgv2zVNfexafsp8KdglzIxeIlBPUQVcu0gLRboQSSRnxhDT";

module.exports = Config;