const authorize = require("../../utils/authorize");
const express = require("express");
const {
  login,
  register,
  getAllUser,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
} = require("./user.controller.js");
const userRoutes = express.Router();
const upload = require("./multer.js");

userRoutes.post("/login", login); // public route
userRoutes.post(
  "/register",
  authorize("create-user"),
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "cvAttach", maxCount: 1 },
    { name: "passportAttach", maxCount: 1 },
  ]),
  register
); // public route
userRoutes.get("/", authorize("readAll-user"), getAllUser); // readUser only
userRoutes.get("/:id", authorize("readSingle-user"), getSingleUser); // authenticated users can read their own and readUser
userRoutes.put("/:id", authorize("update-user"), updateSingleUser); // authenticated users can update their own and updateUser
userRoutes.patch("/:id", authorize("delete-user"), deleteSingleUser); // deleteUser only

module.exports = userRoutes;
