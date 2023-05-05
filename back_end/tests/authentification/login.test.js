import request from "supertest";
import app from "../../server.js";

describe("POST /api/verifyUser/login_user", () => {
  it("should login a user", async () => {
    const user = {
      email: "ks@gmail.com",
      password: "123456",
    };
    const res = await request(app)
      .post("/api/verifyUser/login_user")
      .send(user);
    expect(res.statusCode).toBe(200);
  });

  it("API not correct", async () => {
    const res = await request(app).post("/login_user").send({
      email: "ks@gmail.com",
      password: "123456",
    });
    expect(res.statusCode).toBe(200);
  });

  it("mail not correct", async () => {
    const res = await request(app).post("/api/verifyUser/login_user").send({
      email: "ksa@gmail.com",
      password: "123456",
    });
    expect(res.statusCode).toBe(200);
  });

  it("password not correct", async () => {
    const res = await request(app).post("/api/verifyUser/login_user").send({
      email: "ks@gmail.com",
      password: "1234567",
    });
    expect(res.statusCode).toBe(200);
  });
});
