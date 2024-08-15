import pg from "pg";

export type Cat = {
  id: string;
  name: string;
  age: number;
  breed: string;
};

export async function getAllCats(db: pg.Client) {
  let data: Cat[] = [];
  const sql = "SELECT id, name, age, breed from cat";

  try {
    const result = await db.query(sql);
    data = result.rows
  } catch (error) {
    console.error(error);
  }

  return data;
}
