import express, { Express, Request, Response } from "express";
import { getAllCats, Cat } from "./db/cats";
import { environment, Environment } from "./environment";
const pgp = require("pg-promise")();

const app: Express = express();
const port = 3000;

const cnData: Environment = {
  DBNAME: environment.DBNAME,
  DBUSER: environment.DBUSER,
  DBPASS: environment.DBPASS,
  DBHOST: environment.DBHOST,
  DBPORT: environment.DBPORT,
};

const db =pgp(cnData);

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World from Typescript!");
});

app.get("/cats", async (_req: Request, res: Response) => {
  const cna: Cat[] = await getAllCats(db);

  res.status(200).json(cna);
});

export const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
