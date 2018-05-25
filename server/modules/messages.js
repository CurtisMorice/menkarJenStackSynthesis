let express = require( 'express' );
let router = express.Router();

let messages = [];

router.get( '/', ( req, res )=>{
    console.log( 'in /messages GET' );
    res.send( messages );
}); //end messages POST

router.post( '/', ( req, res )=>{
    console.log( 'in /messages POST:', req.body );
    messages.push( req.body );
    res.sendStatus( 200 );
}); //end messages POST

module.exports = router;