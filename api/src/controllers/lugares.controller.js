const pool = require("../database.js");
const {
  getLugares_handler,
  getLugarByID_handler,
  getLugarByType_handler,
  getLugarByCity_handler,
  getLugarByRegion_handler,
  createLugar_handler,
  updateLugar_handler,
  deleteLugar_handler,
} = require("../handlers/lugar.handler.js");

const getLugares = async (req, res) => {
  const respuesta = await getLugares_handler(req.query);
  res.status(respuesta.code).json(respuesta.response);
};

const getLugarByID = async (req, res) => {
  const respuesta = await getLugarByID_handler(req.params.id);
  res.status(respuesta.code).json(respuesta.response);
};

const getLugarByType = async (req, res) => {
  const respuesta = await getLugarByType_handler(req);
  res.status(respuesta.code).json(respuesta.response);
};

const getLugarByCity = async (req, res) => {
  const respuesta = await getLugarByCity_handler(req);
  res.status(respuesta.code).json(respuesta.response);
};

const getLugarByRegion = async (req, res) => {
  const respuesta = await getLugarByRegion_handler(req);
  res.status(respuesta.code).json(respuesta.response);
};

const createLugar = async (req, res) => {
  const respuesta = await createLugar_handler(req.body);
  res.status(respuesta.code).json(respuesta);
};

const updateLugar = async (req, res) => {
  const respuesta = await updateLugar_handler(req.body, req.params.id);
  res.status(respuesta.code).json(respuesta);
};

const deleteLugar = async (req, res) => {
  const respuesta = await deleteLugar_handler(req.params.id);
  res.status(respuesta.code).json(respuesta);
};

module.exports = {
  getLugares,
  getLugarByCity,
  getLugarByRegion,
  getLugarByType,
  getLugarByID,
  createLugar,
  updateLugar,
  deleteLugar
};
