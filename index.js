"use strict";

const { createApp } = require( "./app" );

const port = process.env.PORT || 1337; // heroku sets process.env.PORT

const omikuji = require( "./bots/omikuji" );
const lgtm = require( "./bots/lgtm" );
const lgtmPlain = require( "./bots/lgtm-plain" );
const zoi = require( "./bots/zoi" );
const poputepikusomikuji = require( "./bots/poputepikusomikuji" );

createApp( {
  port,
  bots: {
    "/omikuji": omikuji,
    "/lgtm": lgtm,
    "/lgtm-plain": lgtmPlain,
    "/zoi": zoi,
    "/poputepikusomikuji": poputepikusomikuji,
  },
} );

console.log( "Listening at http://localhost:" + port )
