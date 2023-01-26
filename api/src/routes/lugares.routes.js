const { Router } = require("express");
const {
  getLugares,
  getLugarByID,
  getLugarByType,
  getLugarByCity,
  getLugarByRegion,
  createLugar,
  updateLugar,
  deleteLugar,
} = require("../controllers/lugares.controller");

const router = new Router();

//GET
router.get("/", getLugares);
router.get("/:id", getLugarByID);
router.get("/type/:type", getLugarByType);
router.get("/city/:city", getLugarByCity);
router.get("/region/:region", getLugarByRegion);

//POST
router.post("/", createLugar);

//PUT
router.put("/:id", updateLugar);

//DELETE
router.delete("/:id", deleteLugar);

module.exports = router;
