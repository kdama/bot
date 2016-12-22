"use strict";

const { createApp } = require( "./app" );

const port = process.env.PORT || 1337; // heroku sets process.env.PORT

const omikuji = require( "./bots/omikuji" );
const lgtm = require( "./bots/lgtm" );
const zoi = require( "./bots/zoi" );

createApp( {
  port,
  bots: {
    "/omikuji": omikuji,
    "/lgtm": lgtm,
    "/zoi": zoi,
  },
} );

console.log( "Listening at http://localhost:" + port )
