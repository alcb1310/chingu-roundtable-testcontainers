export type Cat = {
  id: string;
  name: string;
  age: number;
  breed: string;
};

export async function getAllCats(db: any) {
  let data: Cat[] = [];
  const sql = "SELECT id, name, age, breed from cats";

  try {
    data = await db.any(sql);
    console.dir(data);
  } catch (error) {
    console.error(error);
  }

  return data;
}
