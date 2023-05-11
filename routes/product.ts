import express from "express";
import {CreateNewProductFacade} from "../facades";
const router = express.Router();

/* GET quotes listing. */

router.get('/', async function(req, res, next) {
    try {
        res.json(await CreateNewProductFacade.create("code", "name","name",1,1,10.0,"image"));
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;