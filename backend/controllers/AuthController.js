const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username} = req.body;

    if (!email || !password || !username) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ 
        message: "User already exists",
        success: false,
     });
    }

    const hashedPassword = await bcrypt.hash(password.trim(), 12);

    const user = await User.create({ 
      email:email.trim(), 
      password: hashedPassword, 
      username: username.trim(),
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      path:"/",
    });
    return res
      .status(201)
      .json({ message: "User signed in successfully",
         success: true,
         token,
         user: { 
          id: user._id, 
          username: user.username, 
          email: user.email 
        },
         });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Signup failed",
    });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({
        success: false,
        message:'All fields are required'
      });

    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({
        success: false,
        message:'Incorrect password or email' 
      });
    }
    const auth = await bcrypt.compare(password,user.password)

    if (!auth) {
      return res.json({
        success: false,
        message:' or email'
      }); 
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      path:"/",
    });
      res.status(200).json({ 
      message: "User logged in successfully",
      success: true,
      token,
      user: { 
        id: user._id, 
        username: user.username, 
        email: user.email 
      },
    });

  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Login failed",
    });
  }
}