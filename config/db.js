module.exports = {
  HOST: "http://190.60.31.65",
  USER: "root",
  PASSWORD: "oM1Sc13f",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};