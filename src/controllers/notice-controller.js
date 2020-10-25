const Notice = require("../models/notice");

const insertNotice = async (req, res) => {
  console.log("asssdas");
  const notice = new Notice(req.body);
  try {
    await notice.save();
    res.status(200).send(notice);
  } catch (e) {
    res.send(e);
  }
};

const fetchNotice = async (req, res) => {
  try {
    const notice = await Notice.find({});
    if (!notice) {
      return res.send("no data found");
    }
    res.send(notice);
  } catch (e) {
    res.send(e);
  }
};

const deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) return res.send("no data found");
    res.send(notice);
  } catch (e) {
    res.send(e);
  }
};

exports.insertNotice = insertNotice;
exports.fetchNotice = fetchNotice;
exports.deleteNotice = deleteNotice;
