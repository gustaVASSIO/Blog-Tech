const Category = require('../models/Category');
class CategoriesController{
    async Create(req,res){
        try {
            const {title} = req.body
            const slug = title.replaceAll(' ','-')
            const category= {
                title,
                slug
            }
            await Category.Insert(category)
            res.status(200).json({
                msg:"Category insert with success",
                type:"success"
            })     
        } catch (error) {
            console.log(error)
            res.status(400).json({
                msg:"Bad request",
                type:"error"
            })            
        }
    }
    async ListCategories(req,res){
        try {
            const categories = await Category.ListAll()
            res.status(200).json(categories)
        } catch (error) {
            res.status(404).json({
                msg:"Error in server",
                type:"error"
            })   
        }
    }

    async Destroy(req,res){
        try {
            const {id} = req.params
            await Category.Destroy(id)
            res.status(200).json({
                msg:"Category exclude with success",
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
    async FindByTitle(req,res){
        const {title} = req.body
        try {
            const category = await Category.FindByTitle(title)    
            res.status(200).json(category)
        } catch (error) {
            res.status(404).json({
                msg:"Bad request",
                type:"error"
            })
        }
    }
    async FindById(req,res){
        const {id} = req.params
        try {
            const category = await Category.FindById(id)            
            res.status(200).json(category)
        } catch (error) {
            res.status(404).json({
                msg:"Bad request",
                type:"error"
            })
        }
    }
}
module.exports = new CategoriesController()