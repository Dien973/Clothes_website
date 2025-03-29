const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()


module.exports.setup = (app) => {
    
    app.use('/api/v1/users', router)

    // Sign up api routes
/**
 * @swagger
 * /api/v1/users/signup:
 *   post:
 *     summary: Sign up a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *               email:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: User signed up successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Missing required fields or validation errors
 *       500:
 *         description: Error signing up
 */
    router.post('/signup', userController.signup)

    // Sign in api routes
/**
 * @swagger
 * /api/v1/users/signin:
 *   post:
 *     summary: Sign in a user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User signed in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Signin successfully"
 *       401:
 *         description: Username or password is incorrect
 *       500:
 *         description: Error signing in
 */
    router.post('/signin', userController.signin)

    // Log out api routes
/**
 * @swagger
 * /api/v1/users/logout:
 *   post:
 *     summary: Log out a user
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: User logged out successfully
 *         content:
 *            Application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                     type: string
 *                     example: "Logged out"
 *       500:
 *         description: Error logging out
 *         content:
 *            Application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                     type: string
 *                     example: "Error in logging out"
 */ 
    router.post('/logout', userController.logout)

    // Get user data api routes
/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get user data
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: User data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *       401:
 *         description: Not authenticated
 *       500:
 *         description: Error retrieving user data
 */
    router.get('/', userController.userData)

}