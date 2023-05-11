import express from "express";
import {UpdateBrandFacade} from "../facades/brand/update_brand_facade";
const router = express.Router();


router.get('/', async function(req, res, next) {
    try {
        res.json(await UpdateBrandFacade.update(-1,"yamaha", 1));
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;