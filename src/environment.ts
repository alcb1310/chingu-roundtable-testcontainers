import dotenv from "dotenv";

dotenv.config();

type Environment = {
  DBNAME: string;
  DBUSER: string;
  DBPASS: string;
  DBHOST: string;
  DBPORT: string;
};

export const environment: Environment = {
  DBNAME: process.env.DBNAME || "",
  DBUSER: process.env.DBUSER || "",
  DBPASS: process.env.DBPASS || "",
  DBHOST: process.env.DBHOST || "",
  DBPORT: process.env.DBPORT || "",
};
