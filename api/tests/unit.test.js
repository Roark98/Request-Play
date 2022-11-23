const {
  getLugares_handler,
  getLugarByID_handler,
  createLugar_handler,
  updateLugar_handler,
  deleteLugar_handler,
} = require("../src/handlers/handler.js");
const pool = require("../src/database.js");

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

describe("Unitary tests", () => {
  describe("Select methods", () => {
    test("We must obtain all records in table lugares", async () => {
      const response = await getLugares_handler({});
      expect(response.length).toBeGreaterThan(0);
    });
    test("Should return the lugar that matches with the given id", async () => {
      const response = await getLugarByID_handler(0);
      expect(response.length).toEqual(1);
      expect(response[0].id).toEqual(0);
    });
  });
  describe("Insert methods", () => {
    const example_lugar = {
      image: "example.jpg",
      name: "Insert Test",
      description: "Example description - Insert Test",
      type: "Historia",
      cost: 10.2,
      city: "Quito",
      region: "Sierra",
    };
    test("We can insert a valid record", async () => {
      const initial_state = await getLugares_handler({});
      await createLugar_handler(example_lugar);
      const new_state = await getLugares_handler({});
      expect(new_state.length).toEqual(initial_state.length + 1);
    });
  });
  describe("Update methods", () => {
    test("We can update a valid record", async () => {
      await updateLugar_handler({ name: "updated" }, 0);
      const response = await getLugarByID_handler(0);
      expect(response[0].name).toBe("updated");
    });
  });
  describe("Delete methods", () => {
    test("We can delete a valid record", async () => {
      const initial_state = await getLugares_handler({});
      await deleteLugar_handler(0);
      const new_state = await getLugares_handler({});
      expect(new_state.length).toEqual(initial_state.length - 1);
    });
  });
});

afterAll(() => {
  pool.end();
});
