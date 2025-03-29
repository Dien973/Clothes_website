const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();



module.exports.setup = (app) => {
    app.use('/api/v1/products', router);
    
    /**
     * @swagger
     * /api/v1/products/search:
     *   get:
     *     summary: Searching product
     *     tags:
     *       - Products
     *     parameters:
     *       - name: productname
     *         in: query
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: List of product
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 products:
     *                   type: array
     *                   items:
     *                     type: object
     *                     properties:
     *                       productname:
     *                         type: string
     *                         description: Product name
     *                       producttype:
     *                         type: string
     *                         description: Product type
     *                       productprice:
     *                         type: number
     *                         description: Product price
     *                       description:
     *                         type: string
     *                         description: Product description
     *                       image:
     *                         type: string
     *                         description: Product image
     *                       size:
     *                         type: string
     *                         description: Product size
     *                       stock:
     *                         type: integer
     *                         description: Product stock quantity
     *       400:
     *         description: Missing or invalid product name in the search request
     *       404:
     *         description: No products found matching the search query 
     *       500:
     *         description: Error occurred while searching for products
     */
    router.get('/search', productController.searchProducts);

     /**
     * @swagger
     * /api/v1/products/create:
     *  post:
     *      summary: Create a new product
     *      tags:
     *        - Products
     *      requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                productname:
     *                  type: string
     *                  description: Product name
     *                producttype:
     *                  type: string
     *                  description: Product type
     *                productprice:
     *                  type: number
     *                  description: Product price
     *                description:
     *                  type: string
     *                  description: Product description
     *                image:
     *                  type: string
     *                  description: Product image
     *                size:
     *                  type: string
     *                  description: Product size
     *                stock:
     *                  type: integer
     *                  description: Product stock quantity
     *      responses:
     *        200:
     *          description: User successfully signed up
     *          content:
     *            application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  message:
     *                    type: string
     *                    description: The message returned
     *        400:
     *          description: Password and confirm password do not match.
     *        500:
     *          description: Failed to register user.
     */
    router.post('/create', productController.createProduct);

    /**
     * @swagger
     * /api/v1/products/update/{productId}:
     *   put:
     *     summary: Update product's info
     *     tags:
     *       - Products
     *     parameters:
     *       - in: path
     *         name: productId
     *         required: true
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               productname:
     *                 type: string
     *                 description: Product name
     *               producttype:
     *                 type: string
     *                 description: Product type
     *               productprice:
     *                 type: number
     *                 description: Product price
     *               description:
     *                 type: string
     *                 description: Product description
     *               image:
     *                 type: string
     *                 description: Product image
     *               size:
     *                 type: string
     *                 description: Product size
     *               stock:
     *                 type: integer
     *                 description: Product stock quantity
     *     responses:
     *       200:
     *         description: Product's info updated
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *       400:
     *         description: Missing required fields
     *       500:
     *         description: Error updating Product's info
     */
    router.put('/update/:productId', productController.updateProduct);

    /**
     * @swagger
     * /api/v1/products/delete/{productId}:
     *   delete:
     *     summary: Delete product
     *     tags:
     *       - Products
     *     parameters:
     *       - name: productId
     *         in: path
     *         required: true
     *         description: The ID of the product to delete
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Product deleted successfully
     *         content:
     *            application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  message:
     *                     type: string
     *       400:
     *         description: Missing required fields
     *       500:
     *         description: Error deleting product
     */ 
    router.delete('/delete/:productId', productController.deleteProduct);
    
    /**
     * @swagger
     * /api/v1/products/{producttype}:
     *   get:
     *     summary: List product by type
     *     tags:
     *       - Products
     *     parameters:
     *       - name: producttype
     *         in: query
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: List of product
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 products:
     *                   type: array
     *                   items:
     *                     type: object
     *                     properties:
     *                       productname:
     *                         type: string
     *                         description: Product namee
     *                       productprice:
     *                         type: number
     *                         description: Product price
     *                       image:
     *                         type: string
     *                         description: Product image
     * 
     *       400:
     *         description: Missing or invalid product name in the search request
     *       404:
     *         description: No products found matching the search query 
     *       500:
     *         description: Error occurred while searching for products
     */
    router.get('/:producttype', productController.getProductByType);

     /**
     * @swagger
     * /api/v1/products/detail/{productid}:
     *  get:
     *      summary: Detail product
     *      tags:
     *        - Products
     *      parameters:
     *       - name: productid
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *      responses:
     *        200:
     *          description: Detail product
     *          content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 products:
     *                   type: array
     *                   items:
     *                     type: object
     *                     properties:
     *                       productname:
     *                         type: string
     *                         description: Product name
     *                       producttype:
     *                         type: string
     *                         description: Product type
     *                       productprice:
     *                         type: number
     *                         description: Product price
     *                       description:
     *                         type: string
     *                         description: Product description
     *                       image:
     *                         type: string
     *                         description: Product image
     *                       size:
     *                         type: string
     *                         description: Product size
     *                       stock:
     *                         type: integer
     *                         description: Product stock quantity
     *        400:
     *          description: No products found.
     *        500:
     *          description: Failed to show detail product.
     */
    router.get('/detail/:productid', productController.getProduct)
}