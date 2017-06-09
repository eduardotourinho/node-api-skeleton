const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    // lists a resource
    const usersList = [];
    res.json(usersList);
});

router.post('/', (req, res, next) => {
    // add a resource
    res.json({'status': 'ok', 'user': {}});
});

router.put('/', (req, res, next) => {
    // update a resource
    res.json({'status': 'ok', 'user': {}});
});

router.delete('/', (req, res, next) => {
   // delete a resource
    res.json({'status': 'ok'});
});

module.exports = router;
