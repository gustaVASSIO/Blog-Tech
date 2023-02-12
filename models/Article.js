const db = require('../config/connection');
class Article{
    async ListAll(){
        try {
            return await db.select("*").from('articles');
        } catch (error) {
            console.log(error)
        }
    }
    async Insert(article){
        try {
             await db.insert(article).into('articles')
        } catch (error) {
            console.log(error)
        }
        
    }
    async Destroy(id){
        try {
            await db.delete()
            .from('articles')
            .where({id:id})
        } catch (error) {
            console.log(error)
        }
    }
    async FindById(id){
        try {
            return await db
            .select()
            .from('articles')
            .where({id:id})
        } catch (error) {
            console.log(error)
        }
    }
    async FindByTitle(title){
        try {
            return await db
            .select()
            .from('articles')
            .whereILike('title', '%'+title+'%')
            
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports  = new Article()