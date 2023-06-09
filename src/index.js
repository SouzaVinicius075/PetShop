import 'dotenv/config'
import express from 'express'
import clientRoutes from "./routes/user-routes.js"
import loginRoute from "./routes/login-route.js"
const app = express();

app.use(express.json());
app.use(clientRoutes)
app.use(loginRoute)


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on ${process.env.HOST}:${process.env.SERVER_PORT}/`);
})