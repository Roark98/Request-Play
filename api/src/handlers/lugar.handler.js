const pool = require("../database.js");

const getLugares_handler = async (req) => {
  try {
    const orderBy = req.orderBy || "name";
    const order = req.order || "ASC";
    const response = await pool.query(
      `SELECT * FROM lugar ORDER BY ${orderBy} ${order}`
    );
    return { code: 200, response: response.rows };
  } catch (err) {
    return { code: 400, response: "Error del usuario: Argumentos de petición" };
  }
};

const getLugarByID_handler = async (id) => {
  try {
    const response = await pool.query(`SELECT * FROM lugar WHERE id = ${id}`);
    await pool.query(
      `UPDATE lugar SET visit_count = visit_count + 1 WHERE id = ${id}`
    );
    if (response.rowCount > 0) {
      return { code: 200, response: response.rows };
    } else {
      return { code: 404, response: "Lugar con ID especificado no encontrado" };
    }
  } catch (err) {
    return {
      code: 400,
      response: "Error del usuario: Tipo inválido de identificador",
    };
  }
};

const getLugarByType_handler = async (req) => {
  try {
    const type = req.params.type;
    const orderBy = req.query.orderBy || "name";
    const order = req.query.order || "ASC";
    const response = await pool.query(
      `SELECT * FROM lugar WHERE type = '${type}' ORDER BY ${orderBy} ${order}`
    );
    if (response.rowCount > 0) {
      return { code: 200, response: response.rows };
    } else {
      return { code: 404, response: "Coincidencias no encontradas" };
    }
  } catch (err) {
    return { code: 400, response: "Error del usuario: Argumentos de petición" };
  }
};

const getLugarByCity_handler = async (req) => {
  try {
    const city = req.params.city;
    const orderBy = req.query.orderBy || "name";
    const order = req.query.order || "ASC";
    const response = await pool.query(
      `SELECT * FROM lugar WHERE city = '${city}' ORDER BY ${orderBy} ${order}`
    );
    if (response.rowCount > 0) {
      return { code: 200, response: response.rows };
    } else {
      return { code: 404, response: "Coincidencias no encontradas" };
    }
  } catch (err) {
    return { code: 400, response: "Error del usuario: Argumentos de petición" };
  }
};

const getLugarByRegion_handler = async (req) => {
  try {
    const region = req.params.region;
    const orderBy = req.query.orderBy || "name";
    const order = req.query.order || "ASC";
    const response = await pool.query(
      `SELECT * FROM lugar WHERE region = '${region}' ORDER BY ${orderBy} ${order}`
    );
    if (response.rowCount > 0) {
      return { code: 200, response: response.rows };
    } else {
      return { code: 404, response: "Coincidencias no encontradas" };
    }
  } catch (err) {
    return { code: 400, response: "Error del usuario: Argumentos de petición" };
  }
};

const createLugar_handler = async (contenido) => {
  try {
    const { name, type, description, cost, city, region } = contenido;
    const existe = await pool.query(
      `SELECT * FROM lugar WHERE name like '${name}'`
    );
    if (existe.rowCount > 0) {
      return {
        code: 409,
        response: "Lugar ya existente con el nombre especificado",
      };
    } else {
      const response = await pool.query(
        `INSERT INTO lugar (name, type, description, cost, city, region) VALUES ($1, $2, $3, $4, $5, $6)`,
        [name, type, description, cost, city, region]
      );
      return { code: 201, response: "Lugar created successfully" };
    }
  } catch (err) {
    return { code: 400, response: "Error del usuario: Argumentos especificados inválidos" };
  }
};

const updateLugar_handler = async (contenido, id) => {
  try {
    const existe = await pool.query(`SELECT * FROM lugar WHERE id = ${id}`);
    if (existe.rowCount != 0) {
      let sql = "UPDATE lugar SET ";
      const attributes = Object.keys(contenido);
      for (let i = 0; i < attributes.length; i++) {
        if (i == 0) {
          sql += `${attributes[i]} = '${contenido[attributes[i]]}'`;
        } else {
          sql += `, ${attributes[i]} = '${contenido[attributes[i]]}'`;
        }
      }
      sql += ` WHERE id = ${id}`;

      const response = await pool.query(sql);
      return { code: 200, response: "Lugar modificado" };
    } else {
      return { code: 404, response: "Lugar no existe" };
    }
  } catch (err) {
    return {
      code: 400,
      response:
        "Error del usuario: Argumentos especificados inválidos o violan restricciones de la base de datos",
    };
  }
};

const deleteLugar_handler = async (id) => {
  try {
    const response = await pool.query(`DELETE FROM lugar WHERE id = ${id}`);
    return { code: 200, response: "Lugar eliminado" };
  } catch (err) {
    return { code: 404, response: "Lugar no existente" };
  }
};

module.exports = {
  getLugares_handler,
  getLugarByID_handler,
  getLugarByType_handler,
  getLugarByCity_handler,
  getLugarByRegion_handler,
  createLugar_handler,
  updateLugar_handler,
  deleteLugar_handler,
};
