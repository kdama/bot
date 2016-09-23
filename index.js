"use strict";

const express = require( "express" );
const bodyParser = require( "body-parser" );

const app = express();
const port = 1337;

app.use( bodyParser.urlencoded( { extended: true } ) );

app.listen( port );
console.log( "Listening at http://localhost:" + port )
