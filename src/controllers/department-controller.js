const HttpError = require("../error/http-error");
const department = require("../models/department");

const addDepartment = async (req, res) => {
  const dpt = new department(req.body);
  console.log(dpt);
  try {
    await dpt.save();
    res.status(200).send(dpt);
  } catch (e) {
    throw new HttpError(e);
  }
};

const getDepartment = async (req, res) => {
  try {
    const dpt = await department.find({});
    console.log("dfljka",dpt);
    if (!dpt) {
      return res.send("no data found");
    }
    res.send(dpt);
  } catch (e) {
    throw new HttpError(e);
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const dpt = await department.findByIdAndDelete(req.params.id);
    if (!dpt) {
      return res.status(404).send("no data found");
    }
    res.send("Deleted Successfully");
  } catch (e) {
    throw new HttpError(e);
  }
};


exports.addDepartment = addDepartment;
exports.getDepartment = getDepartment;
exports.deleteDepartment = deleteDepartment;
