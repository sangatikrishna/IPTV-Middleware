

class CustomError extends Error {
    constructor(message,statusCode){

        super(message);
        this.statusCode=statusCode;
        //400-499-client error status=fail
        //500-599 -server error status=error
        this.status=statusCode >= 400 && statusCode <500 ? "fail" : "error";
        this.isOperational=true;
        //find stack trace of error
        Error.captureStackTrace(this,this.constructor);

    }
}
// const error=new CustomError("some error message",404)
export default CustomError;