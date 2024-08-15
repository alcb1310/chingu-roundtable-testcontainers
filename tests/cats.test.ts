import { Client } from "pg";
import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from "@testcontainers/postgresql";
import { getAllCats } from "../src/db/cats";

describe("Customer Repository", () => {
  jest.setTimeout(60000);

  let container: StartedPostgreSqlContainer;
  let client: Client;

  beforeAll(async () => {
    container = await new PostgreSqlContainer()
      .withDatabase("customDatabase")
      .withUsername("customUser")
      .withPassword("customPass")
      .start();
    client = new Client({
      host: container.getHost(),
      port: container.getPort(),
      database: container.getDatabase(),
      user: container.getUsername(),
      password: container.getPassword(),
    });
    await client.connect();

    await client.query(
      "CREATE TABLE IF NOT EXISTS cat (id serial PRIMARY KEY, name text, age int, breed text)",
    );
    await client.query(
      "INSERT INTO cat (name, age, breed) VALUES ('Garfield', 2, 'street')",
    );
  });

  afterAll(async () => {
    await client.end();
    await container.stop();
  });

  it("should return all cats", async () => {
    const cats = await getAllCats(client);
    expect(cats.length).toBe(1);
  });
});
