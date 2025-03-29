//Định nghĩa các hàm cho quản lý sản phẩm.

const productModel = require('../models/productModel')

const searchProducts = async (req, res) => {
    try {
        const { productname } = req.query;

        // Gọi phương thức tìm kiếm sản phẩm từ productModel
        const products = await productModel.searchProducts(productname);

        if (products.length > 0) {
            // Trả về danh sách sản phẩm tìm được
            return res.status(200).json({ products });
        } else {
            // Không tìm thấy sản phẩm
            return res.status(404).json({ message: 'No products found' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error occur while searching product'});        
    }
};

const createProduct = async (req, res) => {
    try {
        const { productname, producttype, productprice, description, image, size, stock } = req.body;

        if (!productname) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        
        // Kiểm tra xem tên đăng nhập đã tồn tại chưa
        const existingProduct= await productModel.getProductName(productname);

        if (existingProduct) {
            return res.status(400).json({ message: 'Productname already exists' });
        }

        await productModel.createProduct({ productname, producttype, productprice, description, image, size, stock });

        req.session.product = await productModel.getDataProduct(productname)
        req.session.product_name = productname

        return res.status(200).json({ message: req.session.product });
    } catch (error) {
        console.error("SignUp error:", error);
        return res.status(500).json({ message: 'Failed to create user' });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params; // Lấy productId từ tham số URL
        const { productname, producttype, productprice, description, image, size, stock } = req.body;

            // Kiểm tra các trường bắt buộc
        if (!productname || !producttype || !productprice || !image || !stock) {
            return res.status(400).json({
                message: 'All fields are required: product_name, product_type, product_unit_price, product_image, product_stock'
            });
        }

        const existingProduct = await productModel.getProduct(productId);
        
        if (existingProduct) {
            await productModel.updateProduct({productId, productname, producttype, productprice, description, image, size, stock});

            // Nếu cập nhật thành công
            return res.status(200).json({ message: 'Product successfully updated' });
        } else {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred while updating the product' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        if (!productId) {
            return res.status(400).json({message: 'Missing required fields' });
        }

        // Kiểm tra xem người dùng có tồn tại không trước khi xóa
        const existingProduct = await productModel.getProduct(productId);
        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Xóa tài khoản người dùng
        await productModel.deleteProduct(productId);

        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Failed to delete product', error: error.message });
    }
};

const getProduct = async (req,res) => {
    try {
        const { productid } = req.params;
        const product =await productModel.getProduct(productid);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' }); // Nếu không tìm thấy sản phẩm
        }
        return res.status(200).json({ product  });

    } catch(error){
        console.error(error);
        return res.status(500).json ({ message: 'Failed to retrieve products' });
    }
}

const getProductByType = async (req, res) => {
    try {
        const { producttype } = req.params;  // Lấy thông tin loại sản phẩm từ params
        const products = await productModel.getProductByType(producttype);  // Gọi model để lấy sản phẩm theo loại

        if (products.length > 0) {
            return res.status(200).json({ products });
        } else {
            return res.status(404).json({ message: 'No products found for this type' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to retrieve products' });
    }
};


module.exports = {
    searchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getProductByType

};

