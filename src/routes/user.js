const {verifyTokenAndAuthorization} = require('./verifyToken')
const router = require('express').Router();

// UPDATE 
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    console.log("ok!");
})

module.exports = router;