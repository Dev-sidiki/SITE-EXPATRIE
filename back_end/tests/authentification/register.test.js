// import request from "supertest";
// import app from "../../server.js";

// describe("POST /api/verifyUser/register_user", () => {
//   it("user created", async () => {
//     const newUser = {
//       firstname: "Essai",
//       lastname: "test",
//       username: "TestEssaie",
//       nationality: "mondiale",
//       email: "test@gmail.com",
//       occupation: "Chomage",
//       residence: "Rue des essaie",
//       statut: "teste",
//       gender: "aucun",
//       password: "tester",
//     };
//     const res = await request(app)
//       .post("/api/verifyUser/register_user")
//       .send(newUser);
//     expect(res.statusCode).toBe(200);
//   });

//   it("email is not found", async () => {
//     const newUser = {
//       firstname: "Essai",
//       lastname: "test",
//       username: "TestEssaie",
//       nationality: "mondiale",
//       email: "test@gmail.com",
//       occupation: "Chomage",
//       residence: "Rue des essaie",
//       statut: "Testeur",
//       gender: "aucun",
//       password: "tester",
//     };
//     const res = await request(app)
//       .post("/api/verifyUser/register_user")
//       .send(newUser);
//     expect(res.statusCode).toBe(200);
//   });

//   it("API not correct", async () => {
//     const res = await request(app).post("verifyUser/register_user").send({
//       firstname: "Essai",
//       lastname: "test",
//       username: "TestEssaie",
//       nationality: "mondiale",
//       email: "test@gmail.com",
//       occupation: "Chomage",
//       residence: "Rue des essaie",
//       statut: "teste",
//       gender: "aucun",
//       password: "teste",
//     });
//     expect(res.statusCode).toBe(200);
//   });
// });
