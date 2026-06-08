import express from "express"
import dotenv from "dotenv"
import routes from "./routes/routes.js"
import db_connection from "./database/db_connection.js"

const app = express();

dotenv.config()
db_connection()
app.use(express.json())
routes(app)

export default app;