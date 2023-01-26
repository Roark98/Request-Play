const pool = require("../database.js");
const bcrypt = require("bcryptjs");

const getUsersHandler = async (req) => {
  try {
    const orderBy = req.query.orderBy || "id";
    const order = req.query.order || "ASC";
    const response = await pool.query(
      `SELECT * FROM users ORDER BY ${orderBy} ${order}`
    );
    return { code: 200, response: response.rows };
  } catch (err) {
    return { code: 400, response: "Error del usuario: Argumentos de petición" };
  }
};

const getUserByIdHandler = async (id) => {
  try {
    const response = await pool.query(`SELECT * FROM users WHERE id = ${id}`);

    if (response.rowCount > 0) {
      return { code: 200, response: response.rows };
    } else {
      return {
        code: 404,
        response: "Usuario con ID especificado no encontrado",
      };
    }
  } catch (err) {
    return {
      code: 400,
      response: "Error del usuario: Tipo inválido de identificador",
    };
  }
};

const createUserHandler = async (req) => {
  try {
    const { username, email, password, role } = req;
    console.log(req);
    const existe = await pool.query(
      `SELECT * FROM users WHERE username = '${username}' OR email = '${email}'`
    );

    if (existe.rowCount > 0) {
      return {
        code: 409,
        response: "Usuario o correo ya registrado",
      };
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const response = await pool.query(
        `INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4)`,
        [username, email, hash, role]
      );
      return { code: 201, response: "Usuario registrado exitosamente" };
    }
  } catch (err) {
    return { code: 400, response: "Argumentos especificados inválidos" };
  }
};

const updateFavoritesHandler = async (req, id) => {
  const { favorites } = req;
  try {
    const existe = await pool.query(`SELECT * FROM users WHERE id = ${id}`);

    if (existe.rowCount == 0) {
      return {
        code: 404,
        response: "Usuario no encontrado para actualizar favoritos",
      };
    } else {
      await pool.query(
        `UPDATE users SET favorites_array = '{${favorites}}' WHERE id = '${id}'`
      );
      return { code: 200, response: "Favorites array updated successfully" };
    }
  } catch (err) {
    console.log(err);
    return { code: 400, response: "Argumentos especificados inválidos" };
  }
};

const loginUserHandler = async (req) => {
  try {
    const { email, password } = req;
    const response = await pool.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );
    if (response.rowCount == 0) {
      return {
        code: 404,
        response: "Correo no registrado",
      };
    } else if (await bcrypt.compare(password, response.rows[0].password)) {
      return { code: 200, response: response.rows };
    } else {
      return {
        code: 404,
        response: "Contraseña inválida",
      };
    }
  } catch (err) {
    return {
      code: 400,
      response: "Error del usuario: Argumentos especificados inválidos",
    };
  }
};

module.exports = {
  getUsersHandler,
  createUserHandler,
  updateFavoritesHandler,
  loginUserHandler,
  getUserByIdHandler,
};
