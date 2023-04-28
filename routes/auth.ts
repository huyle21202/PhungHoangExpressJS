import express from "express";
const auth = require('../services/auth');
const router = express.Router();

/* GET quotes listing. */
router.post('/login', async function(req, res, next) {
    try {
        res.json(await auth.login("", ""));
    } catch (err) {
        res.status(500).json({'message': ""});
    }
});
router.get('/', async function(req, res, next) {
    res.json("Hello from Auth");
});


module.exports = router;