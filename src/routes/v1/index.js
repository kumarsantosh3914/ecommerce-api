const express = require('express');

const router = express.Router();
const helpController = require('../../controllers/help.controller');
const categoryController = require('../../controllers/category.controller');
const productController = require('../../controllers/product.controller');

router.get("/category", categoryController.getAllCategories);
router.post("/category", categoryController.createCategory);
router.get("/category/:id", categoryController.getCategory);
router.patch("/category/:id", categoryController.updateCategory);
router.delete("/category/:id", categoryController.removeCategory);


router.get("/product", productController.getAllProducts);
router.post("/product", productController.createProduct);
router.get("/product/:id", productController.getProduct);
router.patch("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.removeProduct);
router.get("/getProductsByCategory", productController.getProductsByCategory);

router.get("/help", helpController.helpDetails);

module.exports = router;