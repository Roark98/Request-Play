const { Router } = require("express");
const {
  getUsers,
  updateFavorites,
  createUser,
  loginUser,
  getUserById,
} = require("../controllers/users.controller");

const router = new Router();

//Routes
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/register", createUser);
router.post("/login", loginUser);
router.put("/favorites/:id", updateFavorites);

module.exports = router;
