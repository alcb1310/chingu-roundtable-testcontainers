import dotenv from "dotenv";

dotenv.config();

export type Environment = {
  DBNAME: string;
  DBUSER: string;
  DBPASS: string;
  DBHOST: string;
  DBPORT: number;
};

export const environment: Environment = {
  DBNAME: process.env.DBNAME || "",
  DBUSER: process.env.DBUSER || "",
  DBPASS: process.env.DBPASS || "",
  DBHOST: process.env.DBHOST || "",
  DBPORT: parseInt(process.env.DBPORT || "0", 10),
};
