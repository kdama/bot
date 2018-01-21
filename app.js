"use strict";

const express = require( "express" );
const bodyParser = require( "body-parser" );

module.exports = {
  createApp: config => {
    const { port, bots } = config;

    const app = express();

    app.use( bodyParser.urlencoded( { extended: true } ) );

    Object.keys( bots ).forEach( key => {
      const path = key;
      const bot = bots[ key ];

      app.post( path, function( req, res ){
        console.log( `POST ${ path }` );
        console.dir( req.body );

        bot.run( req, res );
      } );
      app.get( path, function( req, res ){
        console.log( `GET ${ path }` );
        console.dir( req.body );

        bot.run( req, res );
      } );
    } );

    app.listen( port );

    return app;
  }
}
