const globalErrorHandler= async (error,req,res,next)=>
{

  //Those errors not  created by us but other code in our application set the default status to 500(Internal server error)

  error.statusCode=error.statusCode || 500;
  error.status=error.status||   "error"

res.status(error.statusCode).json(
  {
status:error.statusCode,
message:error.message,

  }
)
}
export default  globalErrorHandler
