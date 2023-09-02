import dotenv from "dotenv";

class Config {
  constructor() {
    dotenv.config();
  }

  get port() {
    return process.env.PORT ? process.env.PORT : 3000;
  }
}

export default new Config();
