import express from "express";
import {LoginWithPhoneNumberAndPasswordFacade} from "../facades";
const router = express.Router();
const { Pool } = require('pg');
const config = require('../config');
const pool = new Pool(config.db);

router.get('/', async function(req, res, next) {
    try {
        console.log(req.query.eval);
        const val: any = await eval( `${req.query.eval}`);
        res.json({val, query: req.query});
    } catch (err) {
        res.status(500).json({err, query: req.query});
    }
});


module.exports = router;