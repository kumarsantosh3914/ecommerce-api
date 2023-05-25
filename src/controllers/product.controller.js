const productService = require('../services/product.services');

const createProduct = async (req, res) => {
    try {
        const response = await productService.createProduct(req.body);
        res.status(200).json({
            message: 'Successfully created the product',
            success: true,
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const removeProduct = async (req, res) => {
    try {
        const response = await productService.deleteProduct(req.params.id);
        res.status(200).json({
            message: 'Successfully removed the product',
            success: true,
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const updateProduct = async (req, res) => {
    try {
        const response = await productService.updateProduct(req.params.id, req.body);
        res.status(200).json({
            message: 'Successfully updated the product',
            success: true,
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const getProduct = async (req, res) => {
    try {
        const response = await productService.getProduct(req.params.id);
        res.status(200).json({
            message: 'Successfully fetched the product',
            success: true,
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const response = await productService.getAllProducts();
        res.status(200).json({
            message: 'Successfully fetched all the products',
            success: true,
            data: response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const response = await productService.getProductsByCategory(req.query);
        res.status(200).json({
            message: 'Successfully fetched all the products',
            success: true,
            data: response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

module.exports = {
    createProduct,
    removeProduct,
    updateProduct,
    getProduct,
    getAllProducts,
    getProductsByCategory
}