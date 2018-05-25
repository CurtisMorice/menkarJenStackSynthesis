// requires
let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );
// require my server side routes
let messages = require( './modules/messages' );
// globals
const port = 5000;
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// tell app to use my server side routes
app.use( '/messages', messages );
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}); // end server up