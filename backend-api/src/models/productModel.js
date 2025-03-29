const data = require('../config/conectdb')

const productModel = {


    getDataProduct: (productname) => {
        return data('products').select('*').where({ product_name: productname }).first();
    },


    getProduct: (productid) => {
        return data('products').select('*').where({ product_id: productid }).first();
    },

    getProductName: (productname) => {
        return data('products').where({ product_name: productname }).first();
    },

    getProductByType: (producttype) => {
        return data('products').select('product_name', 'product_unit_price', 'product_image').where('product_type', `${producttype}`)
    },

    createProduct: ({productname, producttype, productprice, description, image, size, stock}) => {
        return data('products').insert({
                                    product_name: productname,
                                    product_type: producttype,
                                    product_unit_price: productprice,
                                    product_description: description,
                                    product_image: image,
                                    product_size: size,
                                    product_stock: stock
                                });
    },

    // Cập nhật sản phẩm theo ID
    updateProduct: ({productId, productname, producttype, productprice, description, image, size, stock}) => {
        return data('products').update({
                                    product_name: productname,
                                    product_type: producttype,
                                    product_unit_price: productprice,
                                    product_description: description,
                                    product_image: image,
                                    product_size: size,
                                    product_stock: stock
                                }).where({ product_id: productId });
    },

    // Xóa sản phẩm theo ID
    deleteProduct: (productId) => {
        return data('products').where({ product_id: productId }).del();
    },

    searchProducts: ( productname) => {
        if (!productname) {
            return data('products').select('*');
        }
        return data('products').select('product_name', 'product_type', 'product_unit_price', 'product_description', 'product_image', 'product_size', 'product_stock')
                                .where('product_name', 'like', `%${productname}%`);
    }
};


module.exports = productModel;