// const modifverification = require('../attribuverification/attribuexistmodif');
// class modifyinter {
//     constructor(app, db){
//         this.modifyinter(app, db);
//     }
//     modifyinter = async (app, db) => {
//         app.put('/modifyinter', async (request, response) => {
//             let modificationinter = async (data) => {
//                 return new Promise(resolve => {
//                     let sqlmodifyinter = "UPDATE intervenant SET numIntervenant = ?, nomInterv = ? , tauxHoraire = ? WHERE intervenant.idInt = ?";
//                     db.query(sqlmodifyinter, data, (erreur, success) => {
//                         //moification des informations de la voiture
//                         if(erreur) throw erreur
//                         resolve(true);
//                     })
//                 })
//             }
         
//             //fonctionn principale
//             let idInt = request.body.idInt;
//             let num_intervenant = request.body.numero_intervenant;
//             let verifyifexist = await modifverification(db, num_intervenant, idInt);
//             //si different existe dans le base sera modifie
//             if(!verifyifexist){    
//                 let numaintervenant = request.body.numero_intervenant;
//                 let nom = request.body.nom;
//                 let taux_horaires = request.body.taux_horairesInt;

//                 let donnee = [numaintervenant, nom, taux_horaires, idInt];
//                 let editinter = await modificationinter(donnee);
//                 if( editinter){
//                     response.json({
//                         title: "Success",
//                         message: "modification de la materiel avec success ",
//                         icon: 'success'
//                      })
//                 }
//                 else {
//                     response.json({
//                         title: "Warning",
//                         message: "Immatriculation est deja prise par une autre intervenant ",
//                         icon: 'warning'
//                     })
//                 }
           
//             }
//             else {
//                 response.json({
//                 title: "Erreur",
//                 message: "Immatriculation est deja prise par une autre intervenant ",
//                 icon: 'error'
//             })
//             }
//         })
//     }
// }
// module.exports = modifyinter;