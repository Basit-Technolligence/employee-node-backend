class HttpError extends Error {
  constructor(messgae) {
    super(messgae);
  }
}

module.exports = HttpError;
