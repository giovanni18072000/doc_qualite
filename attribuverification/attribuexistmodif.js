
let verifyavmodif = async (db, numIntervenant, idInt) => {
    return new Promise((resolve) => {
        //requete de verification de la materiel si elle existe dans la base de donnee 
        let data = [numIntervenant, idInt];
        //selectionner les numeros de materiel qui ne sont pas celle a modifier
       let sqlverifyavmodif =  " SELECT * FROM intervenant WHERE numIntervenant = ? AND idInt != ?";
       db.query(sqlverifyavmodif, data, (error, intertrouve) => {
           if(error) throw error
           if(intertrouve && intertrouve.length === 1){
               //succes de la requete 
               resolve(true);
           }
           else resolve(false);
       })
    })
}
module.exports = verifyavmodif;