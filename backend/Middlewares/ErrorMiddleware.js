import customError from "../Utility/CustomError.js";

const ErrorMiddleware = (err, req, res, next) => {
  let message = err.message || "Internal Server Error";
  let statusCode = err.statusCode || 500;
  const duplicateError = () => {
    return new customError("Already student exists", 400);
  };

  const validationError = () => {
    return new customError("Invalid data", 400);
  };

  const handledExpiredJwt = () => {
    return new customError("JWT has expired. Please log in again", 401);
  };

  const handleJwtError = () => {
    return new customError("Invalid Token. Please log in again", 401);
  };

  if (err.code == 11000) {
    err = duplicateError();
  } else if (err.name == "ValidationError") {
    err = validationError();
  } else if (err.name == "TokenExpiredError") {
    err = handledExpiredJwt();
  } else if (err.name == "JsonWebTokenError") {
    err = handleJwtError();
  }
  res.status(statusCode).json({
    sucess: false,
    err: message,
  });
};

export default ErrorMiddleware;
