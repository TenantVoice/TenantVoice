const { isAuthorized } = require('../utils/auth-utils');
const User = require('../db/models/User');

exports.createUser = async (req, res) => {
  const { username, email, password, fullName, location, picture } = req.body;

  // TODO: check if username is taken, and if it is what should you return?
  console.log(location, picture);
  const user = await User.create(username, password, fullName, email, location, picture);
  req.session.userId = user.id;
  res.send(user);
};

exports.listUsers = async (req, res) => {
  const users = await User.list();
  res.send(users);
};

exports.showUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  res.send(user);
};

exports.updateUser = async (req, res) => {
  const { username } = req.body;
  const { id } = req.params;

  if (!isAuthorized(id, req.session)) return res.sendStatus(403);
  const updatedUser = await User.update(id, username);
  if (!updatedUser) return res.sendStatus(404);
  res.send(updatedUser);
};

exports.getUsernameById = async (req, res) => {
  const { id } = req.body;
  const username = await User.getUsernameById(id)

  res.send(username);
}
