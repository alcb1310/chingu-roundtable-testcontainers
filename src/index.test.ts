import request from "supertest";
import app, { server } from "./index";

describe("GET /", () => {
  it("should return 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
  });

  afterAll(() => {
    server.close();
  });
});
