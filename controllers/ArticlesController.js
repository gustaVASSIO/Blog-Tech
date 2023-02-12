const Article = require('../models/Article');
const Category = require('../models/Category');
class ArticlesController{
    async ListArticles(req,res){
        try {
            const articles = await Article.ListAll();
            res.status(200).json(articles)
        } catch (error) {
            console.log(error);
            res.status(404).json({
                msg:"Bad request",
                type:"error"
            })
        }
    }
    async Create(req,res){
        const {title, body, category_id} = req.body
        const slug = title.replaceAll(' ','-')
        const article = {
            title,
            body,
            slug,
            category_id
        }
        try {  
            await Article.Insert(article)
            res.status(200).json({
                msg:"Article insert with success",
                type:"success"
            })
        } catch (error) {
            res.status(404).json({
                msg:"Bad request",
                type:"error"
            })
        }
      
    }
    async Destroy(req,res){
        const {id} = req.params
        try {
            await Category.Destroy(id)            
            res.status(200).json({
                msg:"Article exclude with success",
                type:"success"
            })
        } catch (error) {
            res.status(404).json({
                msg:"Bad request",
                type:"error"
            })
            console.log(error)
        }
    }
    async FindById(req,res){
        const {id} = req.params
        try {
            const article = await Article.FindById(id)            
            res.status(200).json(article)
        } catch (error) {
            res.status(404).json({
                msg:"Bad request",
                type:"error"
            })
        }
    }
    async FindByTitle(req,res){
        const {title} = req.body

        try {
            const article = await Article.FindByTitle(title)    
            res.status(200).json(article)
        } catch (error) {
            res.status(404).json({
                msg:"Bad request",
                type:"error"
            })
        }
    }
}
module.exports = new ArticlesController();