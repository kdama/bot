"use strict";

const fs = require( "fs-extra" );
const path = require( "path" );

const configPath = path.join( "./bots/poputepikusomikuji/config.json" );

const fetchData = () => {
  return fs.readJsonSync( configPath, { throws: false } );
};

const omikuji = ( userName ) => {
  let omikujis = fetchData().omikujis;
  const result = omikujis[ Math.floor( Math.random() * omikujis.length ) ];
  const message = `@${ userName } ${ result }`;
  return message;
};

module.exports = {
  run: ( req, res ) => {
    if ( /\s*help\s*/.test( req.body[ "text" ] ) ) {
      res.end( JSON.stringify( {
        "response_type": "in_channel",
        "text": "- `/poputepikusomikuji` - Draw a poputepikusomikuji\n- `/poputepikusomikuji help` - Help"
      } ) + "\n" );
    } else {
      // draw poputepikusomikuji
      console.log( omikuji( req.body[ "user_name" ] ) );
      res.writeHead( 200, { "Content-Type": "application/json" } );
      res.end( JSON.stringify( {
        "response_type": "in_channel",
        "text": omikuji( req.body[ "user_name" ] )
      } ) + "\n" );
    }
  }
};
