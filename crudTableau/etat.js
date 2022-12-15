class Progression_total{
    constructor(app, db){
        this.total_avance(app, db);
    }
    total_avance = async (app, db) => {
        app.post('/tablesearch', async (request, response) => {
            //console.log(request.body);
            let idenTable = request.body.search;
            let total = (sql) => {
                return new Promise(resolve => {
                    db.query(sql, (e, resultat) => {
                        if(e) throw e
                        resolve(resultat);
                    })
                })
            }
            let searchallrevinter = "SELECT idTab , idTable ,  activiteTable ,  piloteTable , typeTable , dateDebTable , dateFiTable , trimTable , informationTable , progressionTable , pourcentageTable FROM tableau WHERE piloteTable LIKE '%"+idenTable+"%' ORDER BY idTable DESC";
            //sql total
            let sqltotal ="SELECT (SUM(pourcentageTable) / (COUNT(idTab)*100)) * 100 As total FROM tableau WHERE piloteTable LIKE '%"+idenTable+"%' ORDER BY idTable DESC";
            let totalrecette = await total(sqltotal);
            db.query(searchallrevinter, (e, resultat) => {
                if(e) throw e;
               console.log(resultat)
                response.json({
                    resultat,
                    totalrecette
                });
            })
        })
    }
}
module.exports = Progression_total;