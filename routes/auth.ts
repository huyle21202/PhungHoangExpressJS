import express from "express";
import {LoginWithPhoneNumberAndPasswordFacade} from "../facades";
const router = express.Router();

/* GET quotes listing. */
router.post('/login', async function(req, res, next) {
    try {
        res.json(await LoginWithPhoneNumberAndPasswordFacade.login("", ""));
    } catch (err) {
        res.status(500).json({'message': ""});
    }
});
router.get('/', async function(req, res, next) {
    res.json("Hello from Auth");
});


module.exports = router;