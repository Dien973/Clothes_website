const data = require('../config/conectdb');

const cartModel = {

    getCartData: (userid) => {
        return db('cart').select('product_id', 'quantity').where({ user_id: userid });
    },

    getCartProduct: (userid, productid) => {
        return data('cart').where({ user_id: userid, product_id: productid }).first();
    },
    
    // Thêm sản phẩm vào giỏ hàng
    addToCart: async (userid, productid, quantity) => {
        const existingProduct = await cartModel.getCartProduct(userid, productid);

        if (existingProduct) {
        // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
        return cartModel.updateCartProduct(userid, productid, quantity)
            .where({ user_id: userId, product_id: productId })
            .update({ cart_total_quantity: existingProduct.cart_total_quantity + quantity });
        } else {
            // Nếu sản phẩm chưa có, thêm mới vào giỏ hàng
            return data('cart').insert({ user_id: userid, product_id: productid, cart_quantity: quantity });
        }
    },

    // Cập nhật moi số lượng sản phẩm
    updateCart: (userid, productid, quantity) => {
        return data('cart').update({ cart_quantity: quantity}).where({
                                                                    user_id: userid,
                                                                    product_id: productid
                                                                })
    },

    // Cập nhật theem số lượng sản phẩm
    updateCartQuantity: async (userid, productid, quantity) => {
        const cartitem = await cartModel.getCartProduct(userid, productid);

        if (!cartitem) {
            throw new Error("Cart item not found.");
        }

        const newQuantity = cartitem.cart_quantity + quantity;

        return data('cart').update({ cart_quantity: newQuantity })
                            .where({
                                user_id: userid,
                                product_id: productid
                            })
    },

    // Xóa sản phẩm khỏi giỏ hàng
    deleteProductFromCart: (userid, productid) => {
        return data('cart').where({ user_id: userid, product_id: productid }).del();
    },

    //  Xóa toàn bộ sản phẩm trong giỏ hàng
    deleteCart: (userid) => {
        return data('cart').del().where({ user_id: userid })
    }
};

module.exports = cartModel;
