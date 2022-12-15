
let verifyattribu = async (db, numAttr) => {
    return new Promise((resolve) => {
        //requete de verification de la attribution
       let sqlverifyattribu =  " SELECT * FROM `attribution` WHERE attribution.numAttr = ?";
       db.query(sqlverifyattribu, numAttr, (error, attributrouve) => {
           if(error) throw error
           if(attributrouve && attributrouve.length === 1){
               //succes de la requete 
               resolve(true);
           }
           else resolve(false);
       })
    })
}
module.exports = verifyattribu;