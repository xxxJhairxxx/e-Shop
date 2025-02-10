import express, { type Application } from "express"
import cors from "cors"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes"
import { errorHandler } from "./middleware/errorMiddleware"

dotenv.config()

const app: Application = express()
const PORT: number = Number.parseInt(process.env.PORT || "3000", 10)

app.use(cors())
app.use(express.json())

app.use("/api/products", productRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

