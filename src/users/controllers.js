const User = require("./model");

const jwt = require("jsonwebtoken");

//create - post
const registerUser = async (req, res) => {
  try {
    console.log("next called and inside controllers");

    // const user = await User.create{(
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password
    // )};

    const user = await User.create(req.body);

    res
      .status(201)
      .json({
        message: "success",
        user: { username: req.body.username, email: req.body.email },
      });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

//read - get
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({});

    // remove passwords from users object
    //   for (let user of users) {
    //     user.password = "";
    //   }

    res.status(201).json({ message: "success", users: users });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

//update - put
const updateUser = async (req, res) => {
  try {
    const updateUser = await User.update(
      { [req.body.key]: req.body.value },
      { where: { username: req.body.username } }
    );

    res
      .status(201)
      .json({ message: "successfully updated", updateUser: updateUser });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.destroy({
      where: { username: req.body.username },
    });
    console.log("deleteUser", deleteUser);
    res
      .status(201)
      .json({ message: "successfully deleted", deleteUser: deleteUser });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const login = async (req, res) => {
    try {
        if (req.authUser) {
            res.status(200).json({
                message: "success",
                user: {
                    username: req.authUser.username,
                    email: req.authUser.email
                }
            })
            return
        }

        const token = await jwt.sign({id: req.user.id}, process.env.SECRET)
        res.status(200).json({
            message: "success",
            user: {
                username: req.user.username,
                email: req.user.email,
                token: token
            }
        })
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}
module.exports = {
  registerUser,
  getAllUsers,
  updateUser,
  deleteUser,
  login,
};
