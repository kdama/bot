"use strict";

const express = require( "express" );
const bodyParser = require( "body-parser" );

const app = express();
const port = 1337;

const omikuji = require( "./bots/omikuji" );

app.use( bodyParser.urlencoded( { extended: true } ) );

app.post( "/omikuji", function( req, res ){
  console.log( "POST /omikuji" );
  console.dir( req.body );

  omikuji.run( req, res );
} );

app.listen( port );
console.log( "Listening at http://localhost:" + port )
