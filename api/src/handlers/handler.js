const pool = require("../database.js");

const getLugares_handler = async (contenido) => {
  let sql = "SELECT * FROM lugar";

  const { ordered, order, ...filters } = contenido;
  const filter_names = Object.keys(filters);

  if (filter_names) {
    for (let i = 0; i < filter_names.length; i++) {
      if (i == 0) {
        sql += ` WHERE ${filter_names[i]} = '${filters[filter_names[i]]}'`;
      } else {
        sql += ` AND ${filter_names[i]} = '${filters[filter_names[i]]}'`;
      }
    }
  }

  let response = await pool.query(
    sql + ` ORDER BY ${ordered || "name"} ${order || "desc"}`
  );

  return response.rows;
};

const getLugarByID_handler = async (contenido) => {
  const response = await pool.query(
    `SELECT * FROM lugar WHERE id = ${contenido}`
  );
  await pool.query(
    `UPDATE lugar SET visit_count = visit_count + 1 WHERE id = ${contenido}`
  );
  return response.rows;
};

const createLugar_handler = async (contenido) => {
  const { image, name, description, type, cost, city, region } = contenido;
  const response = await pool.query(
    `INSERT INTO lugar VALUES (default, $1, $2, $3, $4, $5, $6, $7)`,
    [image, name, description, type, cost, city, region]
  );
  return "Lugar created successfully";
};

const updateLugar_handler = async (contenido, id) => {
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

  return "Lugar modificado";
};

const deleteLugar_handler = async (contenido) => {
  const response = await pool.query(
    `DELETE FROM lugar WHERE id = ${contenido}`
  );
  return "Lugar deleted successfully";
};

module.exports = {
  getLugares_handler,
  getLugarByID_handler,
  createLugar_handler,
  updateLugar_handler,
  deleteLugar_handler,
};
