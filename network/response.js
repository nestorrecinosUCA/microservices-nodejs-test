exports.success = (req, res, message, statusCode) => {
  let status = statusCode || 200;
  let body = message || '';
  res.status(status).send({
    error: false,
    status,
    body,
  });
}

exports.error = (req, res, message, statusCode) => {
  let status = statusCode || 500;
  let body = message || 'Internal Server Error';
  res.status(status).send({
    error: true,
    status,
    body,
  });
}