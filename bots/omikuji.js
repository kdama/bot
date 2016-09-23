"use strict";

const fs = require( "fs-extra" );
const path = require( "path" );
const omikujiPath = path.join( "./data/omikuji.json" );
const fetchOmikuji = () => {
  let omikujis = fs.readJsonSync( omikujiPath, { throws: false } );
  if ( !omikujis ) {
    console.log( "Cannot read ./data/omikuji.json" );
    omikujis = [
      "大吉",
      "中吉",
      "小吉",
      "吉",
      "末吉",
      "凶",
      "大凶",
      "豚",
    ]
  };
  return omikujis;
};

const omikuji = ( userName ) => {
  let omikujis = fetchOmikuji().omikujis;
  const result = omikujis[ Math.floor( Math.random() * omikujis.length ) ];
  const message = `${ userName } さんは【${ result }】でした！`;
  return message;
};

module.exports = {
  run: ( req, res ) => {
    if ( /\s*add\s*'(.*?)'\s*/.test( req.body[ "text" ] ) ) {
      // add omikuji
      const re = /\s*add\s*'(.*?)'\s*/;
      let data = fetchOmikuji();
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
      fs.outputJsonSync( omikujiPath, data );
      if ( JSON.stringify( fetchOmikuji() ) === JSON.stringify ( data ) ) {
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
      let data = fetchOmikuji();
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
      fs.outputJsonSync( omikujiPath, data );
      if ( JSON.stringify( fetchOmikuji() ) === JSON.stringify ( data ) ) {
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
      let data = fetchOmikuji();
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
      fs.outputJsonSync( omikujiPath, data );
      if ( JSON.stringify( fetchOmikuji() ) === JSON.stringify ( data ) ) {
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
      let data = fetchOmikuji();
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
      fs.outputJsonSync( omikujiPath, data );
      if ( JSON.stringify( fetchOmikuji() ) === JSON.stringify ( data ) ) {
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
      let data = fetchOmikuji();
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
