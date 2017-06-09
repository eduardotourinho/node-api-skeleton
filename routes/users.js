const express = require('express');
const router = express.Router();

const domain = require('../domain');
console.log(domain);

/* GET users listing. */
router.get('/', (req, res, next) => {
    // lists a resource
    const joao = new domain.entity.User('João', 23);
    const pedro = new domain.entity.User('Pedro', 30);
    const usersList = [joao, pedro];

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
