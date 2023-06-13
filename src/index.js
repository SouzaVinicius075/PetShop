import 'dotenv/config'
import express from 'express'
import userRoutes from "./routes/user-routes.js"
import loginRoute from "./routes/login-route.js"
import clientRoutes from "./routes/client-routes.js"
import petRoutes from "./routes/pet-routes.js"
const app = express();

app.use(express.json());
app.use("/login", loginRoute)
app.use("/user", userRoutes)
app.use("/client", clientRoutes)
app.use("/pet", petRoutes)


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on ${process.env.HOST}:${process.env.SERVER_PORT}/`);
})