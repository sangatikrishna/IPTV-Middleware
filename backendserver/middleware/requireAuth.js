import jwt from "jsonwebtoken"
const requireAuth=(req,res,next)=>
{

    //verify authentication
    const {authorization }=req.headers
    if(!authorization)
    {

        return res.status(401).json({error: "Authorization token required"})
    }

    // "Bearer abcdefghijk"

    const token =authorization.split("")[1];
    try{

const {_id}=jwt.verify(token,process.env.SECRET_STR)
    }
    catch(err)
    {
console.log(err);
res.status(401).json({error:"Request is not authorized!"})

    }
;
}