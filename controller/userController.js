const express = require('express');
const router = express.Router();
const service = require('services/userServices');

router.get('/',(req,res) => { res.send('Hello world')});

router.post('/login',(req, res) => {
    const credential = {email: req.body.email, password: req.body.password};
    let user = service.login(credential.email, credential.password);
    if(user) {
        res.send(user)
    } else {
        res.sendStatus(404).send({
            message: 'User not found'
        })
    }
})

module.exports = router;
