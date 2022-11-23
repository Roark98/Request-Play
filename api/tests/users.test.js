const request = require("supertest");
const { app, server } = require("../src/index.js");
const pool = require("../src/database.js");

const api = request(app);

const initial_user = {
  id: 0,
  username: "Red",
  email: "red@example.com",
  password: "password",
  role: "admin",
  favorites_array: [],
};

beforeAll(async () => {
  //Clean table users
  await pool.query("TRUNCATE TABLE users");
  // Insert initial_lugares into table lugar
  await pool.query(
    "INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6)",
    Object.values(initial_user)
  );
});

describe("GET /users", () => {
  test("it should return a list of users", async () => {
    await api
      .get("/api/users/")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
  test("a specific user should be returned", async () => {
    await api
      .get("/api/users/0")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {
  server.close();
  pool.end();
});
