const pool = require("../database.js");
const bcrypt = require("bcryptjs");

const {
  getUsersHandler,
  createUserHandler,
  updateFavoritesHandler,
  loginUserHandler,
  getUserByIdHandler,
} = require("../handlers/users.handler.js");

const getUsers = async (req, res) => {
  const respuesta = await getUsersHandler(req);
  res.status(respuesta.code).json(respuesta.response);
};

const getUserById = async (req, res) => {
  const respuesta = await getUserByIdHandler(req.params.id);
  res.status(respuesta.code).json(respuesta.response);
};

const createUser = async (req, res) => {
  const respuesta = await createUserHandler(req.body);
  res.status(respuesta.code).json(respuesta.response);
};

const updateFavorites = async (req, res) => {
  const respuesta = await updateFavoritesHandler(req.body, req.params.id);
  res.status(respuesta.code).json(respuesta.response);
};

const loginUser = async (req, res) => {
  const respuesta = await loginUserHandler(req.body);
  res.status(respuesta.code).json(respuesta.response);
};


module.exports = {
  getUsers,
  updateFavorites,
  createUser,
  loginUser,
  getUserById,
};
