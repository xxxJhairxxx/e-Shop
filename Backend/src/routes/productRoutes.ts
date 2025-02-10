import express, { type Router } from "express"
import { getProductById, getProducts } from "../controller/productController"

const router: Router = express.Router()

router.route("/").get(getProducts)
router.route("/:id").get(getProductById)


export default router

