"use strict";

const fs = require( "fs-extra" );
const path = require( "path" );

const dataPath = path.join( "./data/omikuji.json" );
const configPath = path.join( "./bots/omikuji/config.json" );

const fetchData = () => {
  let data;
  try {
    data = fs.readJsonSync( dataPath, { throws: false } );
  } catch ( e ) {}
  if ( !data ) {
    console.log( "Cannot read ./data/omikuji.json" );
    data = fs.readJsonSync( configPath, { throws: false } );
    fs.outputJsonSync( dataPath, data );
  };
  return data;
};

const omikuji = ( userName ) => {
  let omikujis = fetchData().omikujis;
  const result = omikujis[ Math.floor( Math.random() * omikujis.length ) ];
  const message = `${ userName } さんは【${ result }】でした！`;
  return message;
};

module.exports = {
  run: ( req, res ) => {
    if ( /\s*add\s*'(.*?)'\s*/.test( req.body[ "text" ] ) ) {
      // add omikuji
      const re = /\s*add\s*'(.*?)'\s*/;
      let data = fetchData();
      const target = req.body[ "text" ].replace( re, "$1" );
      let isExist = false;

      data.omikujis.forEach( omikuji => {
        if ( omikuji === target ) {
          isExist = true;
        }
      } );

      if ( isExist ) {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": req.body[ "user_name" ] + " さんがあたらしいおみくじをふやそうとしてくれましたがもうあります。"
        } ) + "\n" );
        return;
      }
      data.omikujis.push( target );
      fs.outputJsonSync( dataPath, data );
      if ( JSON.stringify( fetchData() ) === JSON.stringify ( data ) ) {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": req.body[ "user_name" ] + " さんがあたらしいおみくじをふやしてくれました！ :blush: 【" + target  + "】"
        } ) + "\n" );
      } else {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": "something is wrong..."
        } ) + "\n" );
      }
    } else if ( /\s*add\s*"(.*?)"\s*/.test( req.body[ "text" ] ) ) {
      // add omikuji
      const re = /\s*add\s*"(.*?)"\s*/;
      let data = fetchData();
      const target = req.body[ "text" ].replace( re, "$1" );
      let isExist = false;

      data.omikujis.forEach( omikuji => {
        if ( omikuji === target ) {
          isExist = true;
        }
      } );

      if ( isExist ) {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": req.body[ "user_name" ] + " さんがあたらしいおみくじをふやそうとしてくれましたがもうあります。"
        } ) + "\n" );
        return;
      }
      data.omikujis.push( target );
      fs.outputJsonSync( dataPath, data );
      if ( JSON.stringify( fetchData() ) === JSON.stringify ( data ) ) {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": req.body[ "user_name" ] + " さんがあたらしいおみくじをふやしてくれました！ :blush: 【" + target  + "】"
        } ) + "\n" );
      } else {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": "something is wrong..."
        } ) + "\n" );
      }
    } else if ( /\s*add\s*`(.*?)`\s*/.test( req.body[ "text" ] ) ) {
      // add omikuji
      const re = /\s*add\s*`(.*?)`\s*/;
      let data = fetchData();
      const target = req.body[ "text" ].replace( re, "$1" );
      let isExist = false;

      data.omikujis.forEach( omikuji => {
        if ( omikuji === target ) {
          isExist = true;
        }
      } );

      if ( isExist ) {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": req.body[ "user_name" ] + " さんがあたらしいおみくじをふやそうとしてくれましたがもうあります。"
        } ) + "\n" );
        return;
      }
      data.omikujis.push( target );
      fs.outputJsonSync( dataPath, data );
      if ( JSON.stringify( fetchData() ) === JSON.stringify ( data ) ) {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": req.body[ "user_name" ] + " さんがあたらしいおみくじをふやしてくれました！ :blush: 【" + target  + "】"
        } ) + "\n" );
      } else {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": "something is wrong..."
        } ) + "\n" );
      }
    } else if ( /\s*add\s*([^\s]*?)\s*/.test( req.body[ "text" ] ) ) {
      // add omikuji
      const re = /\s*add\s*([^\s]*?)\s*/;
      let data = fetchData();
      const target = req.body[ "text" ].replace( re, "$1" );
      let isExist = false;

      data.omikujis.forEach( omikuji => {
        if ( omikuji === target ) {
          isExist = true;
        }
      } );

      if ( isExist ) {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": req.body[ "user_name" ] + " さんがあたらしいおみくじをふやそうとしてくれましたがもうあります。"
        } ) + "\n" );
        return;
      }
      data.omikujis.push( target );
      fs.outputJsonSync( dataPath, data );
      if ( JSON.stringify( fetchData() ) === JSON.stringify ( data ) ) {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": req.body[ "user_name" ] + " さんがあたらしいおみくじをふやしてくれました！ :blush: 【" + target  + "】"
        } ) + "\n" );
      } else {
        res.writeHead( 200, { "Content-Type": "application/json" } );
        res.end( JSON.stringify( {
          "response_type": "in_channel",
          "text": "something is wrong..."
        } ) + "\n" );
      }
    } else if ( /\s*list\s*/.test( req.body[ "text" ] ) ) {
      // list omikuji
      let data = fetchData();
      res.writeHead( 200, { "Content-Type": "application/json" } );
      let list = "ただいまのおみくじ:\n\n";
      data.omikujis.forEach( omikuji => {
        list += `- ${omikuji}\n`
      } )
      res.end( JSON.stringify( {
        "response_type": "in_channel",
        "text": list
      } ) + "\n" );
    } else if ( /\s*help\s*/.test( req.body[ "text" ] ) ) {
      res.end( JSON.stringify( {
        "response_type": "in_channel",
        "text": "- `/omikuji` - Draw an omikuji\n- `/omikuji add ...` - Add an omikuji\n- `/omikuji list` - List omikujis\n- `/omikuji help` - Help"
      } ) + "\n" );
    } else {
      // draw omikuji
      console.log( omikuji( req.body[ "user_name" ] ) );
      res.writeHead( 200, { "Content-Type": "application/json" } );
      res.end( JSON.stringify( {
        "response_type": "in_channel",
        "text": omikuji( req.body[ "user_name" ] )
      } ) + "\n" );
    }
  }
};
