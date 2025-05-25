import { Router } from "express";
import { productController } from "../controller/product.controller.js";

export const productRouter = Router()


productRouter.get('' , productController.getProducts )
productRouter.get('/:id' , productController.getProductById )
productRouter.post('' , productController.createProduct )