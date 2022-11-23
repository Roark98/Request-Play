const pool = require("../database.js");
const {
  getLugares_handler,
  getLugarByID_handler,
  createLugar_handler,
  updateLugar_handler,
  deleteLugar_handler,
} = require("../handlers/handler.js");

const getLugares = async (req, res) => {
  const respuesta = await getLugares_handler(req.query);
  res.json(respuesta);
};

const getLugarByID = async (req, res) => {
  const response = await getLugarByID_handler(req.params.id);

  res.json(response);
};

const createLugar = async (req, res) => {
  const response = await createLugar_handler(req.body);
  res.json(response);
};

const updateLugar = async (req, res) => {
  const response = await updateLugar_handler(req.body, req.params.id);

  res.json(response);
};

const deleteLugar = async (req, res) => {
  const response = await deleteLugar_handler(req.params.id);
  res.json(response);
};

module.exports = {
  getLugares,
  getLugarByID,
  createLugar,
  updateLugar,
  deleteLugar,
};
