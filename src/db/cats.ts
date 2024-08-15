import { environment } from "../environment";
const pgp = require("pg-promise")();

const cn = {
  host: environment.DBHOST,
  port: environment.DBPORT,
  database: environment.DBNAME,
  user: environment.DBUSER,
  password: environment.DBPASS,
  max: 30, // use up to 30 connections
};

export type Cat = {
  id: string;
  name: string;
  age: number;
  breed: string;
};

const db = pgp(cn);

export async function getAllCats() {
  let data: Cat[] = [];
  const sql = "SELECT id, name, age, breed from cat";

  try {
    data = await db.any(sql);
    console.dir(data);
  } catch (error) {
    console.error(error);
  }

  return data;
}
