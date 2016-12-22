"use strict";

const request = require("request");

module.exports = {
  run: ( req, res ) => {
    request.get( {
      url: "http://www.lgtm.in/g",
      method: "GET",
      headers: {
        "Cache-Control" : "no-cache",
        "Accept":"application/json"
      },
      strictSSL: false,
    }, ( err, response, body ) => {
      const message = JSON.parse( body ).imageUrl;
      console.log( message );
      res.writeHead( 200, { "Content-Type": "application/json" } );
      res.end( JSON.stringify( {
        "response_type": "in_channel",
        "text": message
      } ) + "\n" );
    } );
  }
};
