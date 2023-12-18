import userinfos from "../models/userInfos.js"
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";
import util from "util";
const signToken=id =>
{
return jwt.sign({ id }, process.env.SECRET_STR, {
        expiresIn: process.env.LOGIN_EXPIRES,
      });

}

const signup = asyncErrorHandler(async (req, res, next) => {
  const newUser = await userinfos.create(req.body);

const token = signToken(newUser._id)
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
    message: "saved user successfully",
  });
});

// console.log(newUser);

const getuser= async (req, res) => {
    try {
      const userdata = await userinfos.find();
      res.status(200).json(userdata);


    } catch (error) {
      // res.status(500).json(error);
      throw error;
    }
  }

const login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // const {email,password}=req.body;
  //check if email and password are present in req.body

  //check if user exists with given email
  if (!email || !password) {
    const error = new CustomError(
      "Please provide email ID and Password for logging In !",
      400
    );
    return next(error);

    //bad request status code 400
  }
  //if user is present
  const user = await userinfos.findOne({ email }).select("+password");

  //const isMatch=await user.comparePasswordInDB(password,user.password)
  if (!user || !(await user.comparePasswordInDb(password, user.password))) {
    const error = new CustomError("Incorrect email or password", 400);
    return next(error);
  }

  //login a user give back the token

  const token =signToken(user._id);
  user.token=token
  res.status(200).json({
    status: "success",
    token,
    //  user,
  });
};

const protect= async (req,res,next)=>
{

//1.Read he token and check if token exists

//3.If the user has changed the password
//4.Allow user to access the path


const testToken = req.headers.authorization;
let  token;
if(testToken && testToken.startsWith("bearer"))
{


   token = testToken.split(' ')[1]
}
if(!token)
{

  next(new CustomError("You are not logged In",401))
}
console.log(token);
//2.validate the token
const decodedToken=util.promisify(jwt.verify)(token,process.env.SECRET_STR)

console.log(decodedToken);
//3.If the user exists

const user= await userinfos.findById(decodedToken.id);
if(!user)
{

  const error= new CustomError("The user with given token does not exist",401);
  next(error);


}

}



export { signup };
export {protect};
export {getuser};


export default login;
