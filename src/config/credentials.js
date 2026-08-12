import { Sequelize } from "sequelize";

export const conn = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, OBJ_CONN)

const DB_NAME = "Biblioteca"
const DB_USER = "root"
const DB_PASSWORD = ""
const OBJ_CONN = {
    port: 5432,
    host: "localhost",
    dialect: "postgres"
}
const PORT_SERVER = 3000
const HOST_SERVER = "http://localhost:"



export {DB_NAME, DB_USER, DB_PASSWORD, OBJ_CONN, HOST_SERVER, PORT_SERVER}