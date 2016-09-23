"use strict";

const express = require( "express" );
const bodyParser = require( "body-parser" );

const app = express();
const port = 1337;

const omikuji = require( "./bots/omikuji" );
const lgtm = require( "./bots/lgtm" );

app.use( bodyParser.urlencoded( { extended: true } ) );

app.post( "/omikuji", function( req, res ){
  console.log( "POST /omikuji" );
  console.dir( req.body );

  omikuji.run( req, res );
} );

app.post( "/lgtm", ( req, res ) => {
  console.log( "POST /lgtm" );
  console.dir( req.body );

  lgtm.run( req, res );
} );

app.listen( port );
console.log( "Listening at http://localhost:" + port )
