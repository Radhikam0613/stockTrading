const router = require('express').Router();

const { Signup, Login } = require('../controllers/AuthController')
const {userVerification} = require("../middlewares/AuthMiddleware");


router.post('/signup', Signup)
router.post('/login', Login)
router.post("/auth", userVerification, (req, res) => {
  if (req.username) {
    return res.json({ 
      message: "You are authorized!", 
      user: {username: req.username},
      status:true,
  });
  } else {
    res.json({ 
      status: false, 
      user: null });
  }
});

module.exports = router;