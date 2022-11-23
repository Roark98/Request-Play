const request = require("supertest");
const { app, server } = require("../src/index.js");
const pool = require("../src/database.js");

const api = request(app);

const initial_lugar = {
  id: 0,
  image: "test.jpg",
  name: "test",
  description: "Test description",
  type: "Natural",
  cost: 0,
  city: "Guayaquil",
  region: "Costa",
};

beforeAll(async () => {
  //Clean table lugar
  await pool.query("TRUNCATE TABLE lugar");
  // Insert initial_lugares into table lugar
  await pool.query(
    "INSERT INTO lugar VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    Object.values(initial_lugar)
  );
});

describe("GET /lugares", () => {
  test("should respond with a 200 status code, and json content type", async () => {
    await api
      .get("/api/lugares/")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("return a non-empty array of instances", async () => {
    const response = await api.get("/api/lugares/");
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("should return the lugar that matches with the given id", async () => {
    await api
      .get("/api/lugares/0")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("visit_count should be incremented after getting lugar by id", async () => {
    const response = await api.get("/api/lugares/0");
    const initial_count = response.body[0].visit_count;
    const response_2 = await api.get("/api/lugares/0");
    expect(response_2.body[0].visit_count).toEqual(initial_count + 1);
  });
});

describe("POST /lugares", () => {
  const example_lugares = [
    {
      image: "post.jpg",
      name: "Post Test",
      description: "Example description - POST Test",
      type: "Historia",
      cost: 10.2,
      city: "Quito",
      region: "Sierra",
    },
  ];
  test("a valid lugar can be added", async () => {
    await api
      .post("/api/lugares")
      .send(example_lugares[0])
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

describe("PUT /lugares", () => {
  test("a valid lugar can be modified", async () => {
    await api
      .put("/api/lugares/0")
      .send({ description: "Updated description" })
      .expect(200);
  });
});

describe("DELETE /lugares", () => {
  test("a valid lugar can be removed", async () => {
    await api
      .delete("/api/lugares/0")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {
  server.close();
  pool.end();
});
