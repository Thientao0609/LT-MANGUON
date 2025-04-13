const User = require("../../models/user");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');


class AuthenController{
    static async login(req, res){
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "Email and password are required"
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message: "Invalid email or password"
            })
        } else {
            let check = bcrypt.compareSync(password, user.password);
            if (check) {
                let token = jwt.sign({
                    data: 'foobar'
                  }, 'secret', { expiresIn: 3000 });
                return res.status(200).json({
                    message: "Login successful",
                    access_token: token
                })
            } else {
                return res.status(401).json({
                    message: "Invalid email or password"
                })
            }
        }
        
        
    }
}

module.exports = AuthenController;