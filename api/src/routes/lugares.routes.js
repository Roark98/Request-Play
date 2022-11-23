const { Router } = require("express");
const {
  getLugares,
  getLugarByID,
  createLugar,
  updateLugar,
  deleteLugar,
} = require("../controllers/lugares.controller");

const router = new Router();

//Routes
router.get("/", getLugares);
router.post("/", createLugar);
router.get("/:id", getLugarByID);
router.put("/:id", updateLugar);
router.delete("/:id", deleteLugar);

module.exports = router;
