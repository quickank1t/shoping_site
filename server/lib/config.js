import dotenv from "dotenv";

class Config {
  constructor() {
    dotenv.config();
  }

  get logLevel() {
    return process.env.LOG_LEVEL ? process.env.LOG_LEVEL : "INFO";
  }

  get port() {
    return process.env.PORT ? process.env.PORT : 3000;
  }
}

export default new Config();
