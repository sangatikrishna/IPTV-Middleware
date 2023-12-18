
const asyncErrorHandler =(func)=>{

    return(req,res)=>
    {
        func(req,res,next).catch(err=>next(err));
    }



}
export default asyncErrorHandler;