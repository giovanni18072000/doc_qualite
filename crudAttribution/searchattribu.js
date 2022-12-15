// class searchinterv{
//     constructor(app, db){
//         this.search(app, db);
//     }
//     search = async (app, db) => {
//         app.post('/searchinter', (request, response) => {
//             //console.log(request.body);
//             let search = request.body.search;
//             let sqlsearchinter = "SELECT * FROM intevenant WHERE numIntervenant LIKE '%" + search + "%' OR nomInterv LIKE '%" + search + "%'"
//             //console.log(sqlsearchloc);
//             db.query(sqlsearchinter, (e, resultat) => {
//                 if(e) throw e;
//                 response.json(resultat);
//             })
//         })
//     }
// }
// module.exports = searchinterv;