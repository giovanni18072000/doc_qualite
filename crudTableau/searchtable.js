class searchtable {
    constructor(app, db){
        this.searchtable(app, db);
    }
    searchtable = async (app, db) => {
        app.post('/tablesearch', async (request, response) => {
            let valuesearch = request.body.search;  
            let sqlsearch = "SELECT * FROM tableau WHERE idTable LIKE '%" + valuesearch + "%' OR piloteTable LIKE'%" + valuesearch + "%' OR progressionTable LIKE '%" 
                                + valuesearch + "%'  ORDER BY idTable DESC";
            db.query(sqlsearch, (erreur, resultat) => {
                if(erreur) throw erreur;
                response.json(resultat)
            })
        })
    }
}
module.exports = searchtable;