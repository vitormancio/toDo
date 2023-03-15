const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API home');
});

module.exports = router;