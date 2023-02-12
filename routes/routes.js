const express = require('express');
const router = express.Router();
const ArticlesController = require('../controllers/ArticlesController');
const CategoriesController = require('../controllers/CategoriesController');
router.get('/articles',ArticlesController.ListArticles)
router.get('/article/:id',ArticlesController.FindById)
router.get('/article',ArticlesController.FindByTitle)
router.post('/article', ArticlesController.Create)
router.delete('/article/:id',ArticlesController.Destroy)

router.get('/categories',CategoriesController.ListCategories)
router.get('/category/:id',CategoriesController.FindById)
router.get('/category',CategoriesController.FindByTitle)
router.post('/category', CategoriesController.Create)
router.delete('/category/:id',CategoriesController.Destroy)
module.exports = router;