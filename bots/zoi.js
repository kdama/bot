"use strict";

const fs = require( "fs-extra" );
const path = require( "path" );

const tryZoi = () => {
  const ideal = [
    {
      text: "今日",
    },
    {
      text: "も",
      ignore: true,
    },
    {
      text: " 1 ",
    },
    {
      text: "日",
    },
    {
      text: "がん",
    },
    {
      text: "ばる",
    },
    {
      text: "ぞい",
      ignore: true,
    },
    {
      text: "！",
      ignore: true,
    },
  ];
  const fault = "ぞい";
  const result = ideal.map( item => {
    const isSucceeded = item.ignore || Math.floor( Math.random() * 2 );
    return !!isSucceeded ? item.text : fault;
  } ).join( "" );
  if ( ideal.map( item => item.text ).join("") === result ) {
    return ":star2: " + result + " :star2:"
  }
  return result;
};

module.exports = {
  run: ( req, res ) => {
    if ( /\s*help\s*/.test( req.body[ "text" ] ) ) {
      res.end( JSON.stringify( {
        "response_type": "in_channel",
        "text": "- `/zoi` - zoi\n- `/zoi help` - Help\n\n― heavily inspired by `http://qiita.com/giiko_/items/8c3442e8e7a83cc0b91a`"
      } ) + "\n" );
    } else {
      // zoi
      console.log( tryZoi( req.body[ "user_name" ] ) );
      res.writeHead( 200, { "Content-Type": "application/json" } );
      res.end( JSON.stringify( {
        "response_type": "in_channel",
        "text": tryZoi( req.body[ "user_name" ] )
      } ) + "\n" );
    }
  }
};
