import express, { Express, Request, Response } from "express";
import { getAllCats, Cat } from "./db/cats";

const app: Express = express();
const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World from Typescript!");
});

app.get("/cats", async (_req: Request, res: Response) => {
  const cna: Cat[] = await getAllCats();

  res.status(200).json(cna);
});

export const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
