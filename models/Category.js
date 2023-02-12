const db = require('../config/connection');
class Category{
    async ListAll(){
        try {
            return await db.select("*").from('categories');
        } catch (error) {
            console.log(error)
        }
    }
    async Insert(category){
        try {
            await db.insert(category).into('categories')
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async Destroy(id){
        try {
            await db
            .delete()
            .from('categories')
            .where({id:id})
        } catch (error) {
            console.log(error)
        }
    }
    async FindById(id){
        try {
            return await db
            .select()
            .from('categories')
            .where({id:id})
        } catch (error) {
            console.log(error)
        }
    }
    async FindByTitle(title){
        try {
            return await db
            .select()
            .from('categories')
            .whereILike('title', '%'+title+'%')
            
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new Category()