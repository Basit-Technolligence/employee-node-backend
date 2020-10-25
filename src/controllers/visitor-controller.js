const HttpError = require("../error/http-error");
const Visitor = require("../models/visitor");

const insertVisitor = async (req, res) => {
  const visitor = new Visitor(req.body);
  try {
    await visitor.save();
    res.status(200).send(visitor);
  } catch (e) {
    throw new HttpError(e);
  }
};

const fetchVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.find({});
    if (!visitor) return res.send("no data found");
    res.send(visitor);
  } catch (e) {
    throw new HttpError(e);
  }
};

exports.fetchVisitor = fetchVisitor;
exports.insertVisitor = insertVisitor;
