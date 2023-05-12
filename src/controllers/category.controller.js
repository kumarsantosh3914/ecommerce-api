const categoryService = require('../services/category.services');

const createCategory = async (req, res) => {
    try {
        const response = await categoryService.createCategory(req.body);
        res.status(200).json({
            message: 'Successfully created the category',
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

const removeCategory = async (req, res) => {
    try {
        const response = await categoryService.deleteCategory(req.params.id);
        res.status(200).json({
            message: 'Successfully removed the category',
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

const updateCategory = async (req, res) => {
    try {
        const response = await categoryService.updateCategory(req.params.id, req.body);
        res.status(200).json({
            message: 'Successfully update the category',
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

const getCategory = async (req, res) => {
    try {
        const response = await categoryService.getCategory(req.params.id);
        res.status(200).json({
            message: 'Successfully fetched the category',
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

const getAllCategories = async (req, res) => {
    try {
        const response = await categoryService.getAllCategories();
        res.status(200).json({
            message: 'Successfully fetched all the category',
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

module.exports = {
    createCategory,
    removeCategory,
    updateCategory,
    getCategory,
    getAllCategories,
}