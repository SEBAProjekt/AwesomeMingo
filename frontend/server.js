/**
 * Created by nicol on 09.06.2016.
 */

var express = require('express');
var app = express ();

app.use(express.static(__dirname + '/public'));

app.listen(7777);