const HttpError = require("../error/http-error");
const Employee = require("../models/employee");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getLogUser = async (req, res) => {
  try {
    const user = await Employee.findById(req.user.userid).select("-password");
    res.json(user);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};
const findLoginUser = async (req, res) => {
  Employee.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth Failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(402).json({
            message: "Auth Failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userid: user[0].id,
            },
            "secret",
            {
              expiresIn: "1h",
            }
          );
          return res.json({
            message: "Auth Successfull",
            token: token,
            result: result,
          });
        }
        res.status(441).json({
          message: "Auth Failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
const abc = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Employee.findOne({ email });
    console.log("founduseer", user);
    if (!user) {
      return res.status(545).json({ message: "There is no userr.." });
    }

    let isMatchedPassword = await bcrypt.compare(password, user.password);

    console.log("??", isMatchedPassword);
    if (isMatchedPassword) {
      const payload = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(payload, "secret", {
        expiresIn: "1h",
      });

      return res.json({ token });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(555).json({ message: "Seerver erorr" });
  }
};

const insertEmployee = async (req, res) => {
  let employee = {};
  req.body.photo = req.file.buffer;
  bcrypt.hash(req.body.password, 10, async function (err, hash) {
    req.body.password = hash;
    employee = new Employee(req.body);
    try {
      await employee.save();
      res.status(200).send(employee);
    } catch (e) {
      throw new HttpError(e);
    }
  });
};

const fetchEmployee = async (req, res) => {
  try {
    const emp = await Employee.find({});
    if (!emp) {
      return res.send("no data found");
    }
    res.send(emp);
  } catch (e) {
    throw new HttpError(e);
  }
};

const fetchEmployeeById = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if (!emp) {
      return res.send("no data found");
    }
    res.send(emp);
  } catch (e) {
    throw new HttpError(e);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const emp = await Employee.findByIdAndUpdate(req.params.id, req.body);
    if (!emp) {
      return res.send("no data found");
    }
    res.send(emp);
  } catch (e) {
    throw new HttpError(e);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const emp = await Employee.findByIdAndDelete(req.params.id);
    if (!emp) {
      return res.status(404).send("no data found");
    }
    res.send(emp);
  } catch (e) {
    throw new HttpError(e);
  }
};

exports.insertEmployee = insertEmployee;
exports.fetchEmployeeById = fetchEmployeeById;
exports.fetchEmployee = fetchEmployee;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;
exports.findLoginUser = findLoginUser;
exports.getLogUser = getLogUser;
exports.abc = abc;
