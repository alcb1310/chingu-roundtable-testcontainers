import express, {Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World from Typescript!");
});

export const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app
