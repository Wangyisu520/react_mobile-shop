import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

/**
 * @desc 用户身份验证 & 获取Token
 * @route POST/api/ussers/login
 * @access 公开
 */
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("邮箱或密码错误");
  }
});

/**
 * @desc 获取登陆用户信息
 * @route GET/api/ussers/profile
 * @access 私有
 */
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("用户不存在");
  }
});
/**
 * @desc 更新用户资料
 * @route PUT/api/ussers/profile
 * @access 私有
 */
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updataUser = await user.save();
    res.json({
      _id: updataUser._id,
      name: updataUser.name,
      email: updataUser.email,
      isAdmin: updataUser.isAdmin,
      token: generateToken(updataUser._id),
    });
  } else {
    res.status(404);
    throw new Error("用户不存在");
  }
});

/**
 * @desc 用户注册
 * @route POST/api/ussers
 * @access 公开
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("用户已注册");
  }
  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("无效的用户信息");
  }
});
export { authUser, getUserProfile, registerUser, updateUserProfile };
