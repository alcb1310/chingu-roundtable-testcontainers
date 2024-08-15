import request from "supertest";
import app, { server } from "./index";
import { getAllCats } from "./db/cats";

jest.mock("./db/cats");

describe("GET /", () => {
  it("should return 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
  });
});

describe("GET /cats", () => {
  it("should return the cats", async () => {
    (getAllCats as jest.Mock).mockResolvedValue([
      {
        id: 1,
        name: "Garfield",
        age: 2,
        breed: "street",
      },
      {
        id: 2,
        name: "Sylvester",
        age: 5,
        breed: "tabby",
      },
    ]);

    const response = await request(app).get("/cats");
    expect(response.statusCode).toEqual(200);
    expect(response.body.length).toEqual(2);

    expect(response.body[0].id).toEqual(1);
    expect(response.body[0].name).toEqual("Garfield");
    expect(response.body[0].breed).toEqual("street");
    expect(response.body[0].age).toEqual(2);

    expect(response.body[1].id).toEqual(2);
    expect(response.body[1].name).toEqual("Sylvester");
    expect(response.body[1].breed).toEqual("tabby");
    expect(response.body[1].age).toEqual(5);
  });
});

afterAll(() => {
  server.close();
});
