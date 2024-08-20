import { Router } from "express";
import {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct} from '../controllers/productController.mjs';
const router = Router();

router.get("/", getAllProducts);
router.get("/product/:id", getProductById);
router.post("/", addProduct);
router.put("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct);

export default router;