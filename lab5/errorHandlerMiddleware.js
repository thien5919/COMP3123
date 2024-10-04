const errorHandlerMiddleware = (err,req,res,next) => {
    console.log('This is error router');
    const errorObj = {
        status: 500,
        message: "Server Error",
        err: err.message
    };
    res.status(500).send(errorObj);
}
module.exports = errorHandlerMiddleware;