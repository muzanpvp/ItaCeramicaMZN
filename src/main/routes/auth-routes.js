const router = require('express').Router();

//Autorização login
router.get('/login',(req,res) =>{
    res.render(login);
});

//Autorização com google
router.get('/google',(req,res) =>{
    res.send('logging in with google');
})

//Logout da conta
router.get('/logout',(req,res) =>{
    res.send('logging out');
})

module.exports = router;