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
};

beforeAll(async () => {
  //Clean table users
  await pool.query("TRUNCATE TABLE users");
  // Insert initial_lugares into table lugar
  await pool.query(
    "INSERT INTO users VALUES ($1, $2, $3, $4, $5)",
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

describe("POST /users", () => {
  test("a new user should be registered", async () => {
    const newUser = {
      username: "newuser",
      email: "user@gmail.com",
      password: "newpassword",
      role: "user",
    };
    await api.post("/api/users/register").send(newUser).expect(201);
  });
  test("POST /users/login", async () => {
    const loginCredentials = {
      email: "user@gmail.com",
      password: "newpassword",
    };
    await api.post("/api/users/login").send(loginCredentials).expect(200);
  });
});

describe("PUT /users", () => {
  test("a user can modify their favorite places", async () => {
    const updatedFavorites = {favorites: [10, 11, 12]};
    await api.put("/api/users/favorites/0").send(updatedFavorites).expect(200);
  });
})


afterAll(() => {
  server.close();
  pool.end();
});
