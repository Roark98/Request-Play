const pool = require("../database.js");
const bcrypt = require("bcryptjs");

const getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM users");
  res.json(response.rows);
};

const createUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const response = await pool.query(
    `INSERT INTO users VALUES (default, $1, $2, $3, $4)`,
    [username, email, hash, role]
  );
  res.json("User created successfully");
};

const updateFavorites = async (req, res) => {
  const { favorites } = req.body;
  const response = await pool.query(
    `UPDATE users SET favorites_array = $1 WHERE id = $2`,
    [favorites, req.params.id]
  );
  res.json("Favorites updated");
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const response = await pool.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
  const validation = await bcrypt.compare(password, response.rows[0].password);
  console.log(validation);
  if (validation) {
    res.json("Correct validation");
  } else {
    res.json("Incorrect password");
  }
};

const getUserById = async (req, res) => {
  const response = await pool.query(`SELECT * FROM users WHERE id = $1`, [
    req.params.id,
  ]);
  res.json(response.rows[0]);
};

module.exports = {
  getUsers,
  updateFavorites,
  createUser,
  loginUser,
  getUserById,
};
