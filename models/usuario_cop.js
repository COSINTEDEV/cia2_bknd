const { engine } = require("express/lib/application")

module.exports = (sequelize, type) => {

  const {STRING, DATE, INTEGER, BIGINT} = type

  return sequelize.define('usuario', {
    login_intento: DATE ,
    token: STRING(100),
    id: {
      type: STRING(100),
      primaryKey: true
    },
    contrasena: STRING(100),
    perfil: INTEGER,
    ultima_actividad: INTEGER,
    contacto: INTEGER,
    captcha: STRING,
    sobre_mi: STRING,
    habilitado: STRING(3),
    ultima_visita_perfil: DATE,
    departamento: INTEGER,
    coordinador: BIGINT(20),
    usuario: STRING,
    ultimo_login: DATE,
    interventoria: INTEGER,
    recepcion: STRING,
    n_pass: INTEGER,
  })
}