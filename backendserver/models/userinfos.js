import  mongoose from "mongoose";
import  validator from "validator";
import cryptojs from "crypto-js";
import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"
  //name,email,password,confirm password
const userSchema= new mongoose.Schema({
 
  name:{
    type:String,
    // required:[true,"Please enter your name."]
  },
  email:
  {
 
    type:String,
    required:[true,"Please enter and email."],
    unique:true,
    lowercase:true,
    validate:[validator.isEmail,"invalid email address"]
  },
  password:{
 
    type:String,
    required:[true,"Please enter a password"],
    minlength:8,
    select:false
 
  },
 
  confirmPassword:{
    type:String,
    // required:[true,"Please confirm your password "],
    validate:{
        validator:function(val){
        return val == this.password;
    },
    message:"Password and confirm Password does not match "
 
 
  }
  }
 
},{
  versionKey:false
});
 
userSchema.pre("save",async function(next){
  if(!this.isModified("password")) return next();
  //encrypt the passwordbefore saving
  // this.password =  cryptojs.AES.encrypt(this.password,"EncryptionandDecreption").toString();
  this.password = await bcrypt.hash(this.password,12);
 
 
  this.confirmPassword=undefined;
  next();
 
})
userSchema.methods.comparePasswordInDb=async function(pswd,pswdDB)
{
// return await cryptojs.AES(pswd,pswdDB);
return await bcrypt.compare(pswd,pswdDB);
 
 
}
const userinfos=new mongoose.model("userinfos",userSchema);
export default userinfos;