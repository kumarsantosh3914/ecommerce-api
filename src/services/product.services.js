const Product = require('../models/product');

const createProduct = async (data) => {
    try {
        const newProduct = {
            name: data.name,
            price: data.price,
            category: data.category,
            img: data.img,
            description: data.description,
        }
        console.log(data)
        const product = await new Product(newProduct).save();
        return product;
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (id) => {
    try {
        const product = await Product.findOneAndDelete({ id: id });
        return product;
    } catch (error) {
        console.log(error);
    }
}

const getAllProducts = async () => {
    try {
        const product = Product.find();
        return product;
    } catch (error) {
        console.log(error);
    }
}

const getProduct = async (id) => {
    try {
        const product = Product.findById(id);
        return product;
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (id, data) => {
    try {
        const product = Product.findOneAndUpdate(
            { id: id },
            data,
            { new: true }
        );
        return product;
    } catch (error) {
        console.log(error);
    }
}

/**
 * The function `getProductsByCategory` retrieves products based on the provided category
 * and optional sorting or filtering criteria. If `data.sort` is present, it sorts the products by price
 * in either ascending or descending order. If `data.filter` is present, it filters the products
 * based on the specified price range. If neither `data.sort` nor `data.filter` is provided, it 
 * fetches all products in the given category. The function returns a promise that resolves to the
 * retrieved products or logs an error if an exception occurs.
 */

const getProductsByCategory = async (data) => {
    try {
        let product;
        const categoryQuery = { category: data.id };

        if (data.sort) {
            const sortCriteria = (data.sort === 'inc') ? '' : '-';
            product = await Product.find(categoryQuery).sort(sortCriteria + 'price');
        } else if (data.filter) {
            if (data.lessThanPrice && data.moreThanPrice) {
                product = await Product.find({
                    ...categoryQuery,
                    price: { $lt: data.lessThanPrice, $gt: data.moreThanPrice }
                });
            } else {
                product = await Product.find(categoryQuery);
            }
        } else {
            product = await Product.find(categoryQuery);
        }
        return product;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    getProductsByCategory,
}