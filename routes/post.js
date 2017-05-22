const express = require('express');
const router = express.Router();
var th = require('../data/th.js');
var io = require('../io/io.js');
router.post('/', (req, res)=>{
    console.log('Receive data:');
    let t = req.body.t;
    let h = req.body.h;
    th.t = t;
    th.h = h;
    console.log(req.body);
    // io.emit('update', {
    //     t:t,
    //     h:h
    // });
    //console.log(io);
    io.io.emit('update', {
        t:t,
        h:h
    });
    res.json(req.body);
});
module.exports = router;