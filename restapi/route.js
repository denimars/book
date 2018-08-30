const  express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    return res.json({message:'testing server broh'});
});

module.exports = {
    router : router,
    test: 'saya hanya router biasa'   
};