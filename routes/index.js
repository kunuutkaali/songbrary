const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    console.log('went to frontpage');
    res.render('index', { title:"Frontpage" } )
})

module.exports = router