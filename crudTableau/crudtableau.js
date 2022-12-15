class Tableau {
    constructor(app, db, validator) {
         this.all_tableau(app, db);
         this.newtableau(app, db);
         this.delete_tableau(app, db, validator)
         this.update_tableau(app, db, validator)
    }
    all_tableau(app, db){
        app.get('/all_tableau', (request, response) => {
            const request_attribution = "SELECT * FROM tableau ORDER BY idTable";
            db.query(request_attribution, (err, resultat) => {
                if(err) throw err;
                response.json(resultat);
                })
        })
    }
    newtableau(app, db) {
        app.post('/newtableau', (req, res) => {
            console.log('on est dans le back end')
            let idTable_verification = function idTable(valeur) {
                return new Promise((resolve, reject) => {
                    let request_idTable = "SELECT * FROM tableau WHERE `idTable`= ? "
                    db.query(request_idTable, valeur, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length >= 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }
            let ajouter_tableau = function add_tableau(valeur) {
                return new Promise((resolve, reject) => {
                    let request_add = "INSERT INTO `tableau` (`idTab`, `idTable`, `activiteTable`, `piloteTable`,`typeTable`,`dateDebTable`,`dateFiTable`,`trimTable`,`informationTable`,`progressionTable`,`pourcentageTable`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
                    db.query(request_add, valeur, (e, resultat) => {
                        if (e) { throw e }
                        resolve(true)
                    })
                })
            }
            let ajouter_function = async () => {
                
                let identification_ableau = req.body.identification_Tableau;
                let  activite_ableau = req.body.activite_Tableau;
                let   pilote_ableau =req.body.pilote_Tableau;
                let   type_ableau=req.body.type_Tableau;
                let   date_debut_ableau= new Date(req.body.date_debut_Tableau);
                let   date_fin_ableau=new Date(req.body.date_fin_Tableau);
                let   trim_ableau=req.body.trim_Tableau;
                let   information_ableau=req.body.information_Tableau;
                let   progression_ableau=req.body.progression_Tableau;
                let    pourcentage_ableau=req.body.pourcentage_Tableau;
                let admin = req.body.droit_administrateur

                let admin_number = 0
                if (admin === true) { admin_number = 1 }
                else { admin_number = 0 }
                console.log(req.body);//terminal 
                // let cols_contact = [contact, whatsapp, email]
                // let cols_ajouter = [name, surname, contact, whatsapp, email, admin_number]
                // let ajout_nouveau = [name, surname, contact, whatsapp, email, admin_number, password]

                let cols_idTable = [identification_ableau]
                let ajout_nouveau = [identification_ableau, activite_ableau, pilote_ableau,type_ableau , date_debut_ableau, date_fin_ableau, trim_ableau,information_ableau,progression_ableau,pourcentage_ableau]
                if ( identification_ableau.length >= 1 && identification_ableau.length <= 10 && activite_ableau.length >= 5 && activite_ableau.length <= 255 && pilote_ableau.length >= 2 && pilote_ableau.length <= 10 &&  type_ableau.length >= 5 && type_ableau.length <= 50 && trim_ableau.length >= 1 && trim_ableau.length <= 10 && information_ableau.length >= 5 && information_ableau.length <= 255
                     && progression_ableau.length >= 5 && progression_ableau.length <= 50 && pourcentage_ableau.length >= 1 && pourcentage_ableau.length <= 10
                    ){
                        let verify_idTable = await idTable_verification(cols_idTable)
                        if (verify_idTable === true) {
                            res.json({
                                title: "Erreur",
                                message: "L'identification est déjà utilisé",
                                icon: 'info'
                            })
                        }
                        else {
                            let add_success = await ajouter_tableau(ajout_nouveau)
                            if (add_success === true) {
                                res.json({
                                    title: 'Succès',
                                    message: "L'information a bien été enregistré",
                                    icon: 'success'
                                })
                            }
                            else {
                                res.json({
                                    title: 'Erreur',
                                    message: "Erreur dans l'insertion dans la base de donnee",
                                    icon: 'warning'
                                })
                            }
                        }
                }
                else {
                    let message = ''
                    if (identification_ableau.length < 1 || identification_ableau.length > 10) {
                        if (identification_ableau.length < 1) { message = "Identification trop court" }
                        else { message = "Identification trop long" }
                    }
                    if (activite_ableau.length < 5 || activite_ableau.length > 255) {
                        if (activite_ableau.length < 5) { message = "Activite trop court" }
                        else { message = "Activite trop long" }
                    }
                    if (pilote_ableau.length < 2 || pilote_ableau.length > 10) {
                        if (pilote_ableau.length < 2) { message = "Pilote trop court" }
                        else { message = "Pilote trop long" }
                    }

                    if (type_ableau.length < 5 || type_ableau.length > 50) {
                        if (type_ableau.length < 5) { message = "Type incomplet" }
                        else { message = "Type  invalide" }
                    }
                    if (trim_ableau.length < 1 || trim_ableau.length > 10) {
                        if (trim_ableau.length < 1) { message = "Trim incomplet" }
                        else { message = "Trim trop long" }
                    }
                    if (information_ableau.length < 5 || information_ableau.length > 255) {
                        if (information_ableau.length < 5) { message = "Derniere information est trop court" }
                        else { message = "Derniere information trop long" }
                    }
                    if (progression_ableau.length < 5 || progression_ableau.length > 50) {
                        if (progression_ableau.length < 5) { message = "Progression incomplet" }
                        else { message = "Progression trop long" }
                    }
                    if (pourcentage_ableau.length < 1 || pourcentage_ableau.length > 10) {
                        if (pourcentage_ableau.length < 1) { message = "Pourcentage incomplet" }
                        else { message = "Pourcentage trop long" }
                    }
                    res.json({
                        title: "Erreur",
                        message: message,
                        icon: 'error',
                        form_error: true
                    })
                }
            }
            ajouter_function()
        //}
        })
    }

    delete_tableau(app, db, validator) {
        app.delete('/delete_tableau', (req, res) => {
            let verification_exist = function verification_exist(id_delete) {
                return new Promise((resolve, request) => {
                    let verification_request = "SELECT * FROM `tableau` WHERE idTab = ?"
                    db.query(verification_request, id_delete, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length === 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }
            let delete_tableau = function delete_tableau(id_delete) {
                return new Promise((resolve, reject) => {
                    let delete_request = "DELETE FROM `tableau` WHERE `tableau`.`idTab` = ?"
                    db.query(delete_request, id_delete, (e, resultat) => {
                        if (e) { throw e }
                        resolve(true)
                    })
                })
            }
            let delete_function = async () => {
                let idTab = req.body.idTab
                let verify_exist = await verification_exist(idTab)
                if (verify_exist === true) {
                    let del_success_vf = await delete_tableau(idTab)
                    if (del_success_vf === true) {
                        res.json({
                            title: 'Succès',
                            message: "L'information a bien été supprimé",
                            icon: 'success',
                        })
                    }
                    else {
                        res.json({
                            title: 'Error',
                            message: 'Contacter le developpeur',
                            icon: 'warning'
                        })
                    }
                }
                else {
                    res.json({
                        title: "Echec!",
                        message: "Entrez des information valide",
                        icon: 'error'
                    })
                }
            }
            delete_function()
        })
    }

    update_tableau(app, db, validator) {
        app.put('/update_tableau', (req, res) => {
            let verification_exist = function verification_exist(id_update) {
                return new Promise((resolve, request) => {
                    let verification_request = "SELECT * FROM `tableau` WHERE idTab = ?"
                    db.query(verification_request, id_update, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length === 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }
            let update_tableau = function modify_tableau(id_update) {
                return new Promise((resolve, reject) => {
                    let update_request = "UPDATE `tableau` SET `idTable` = ?, `activiteTable` = ?, `piloteTable` = ?, `typeTable` = ?, `dateDebTable` = ?, `dateFiTable` = ? , `trimTable` = ? ,`informationTable` = ? ,`progressionTable` = ?, `pourcentageTable` = ? WHERE `tableau`.`idTab` = ?"
                    db.query(update_request, id_update, (e, resultat) => {
                        if (e) { throw e }
                        resolve(true)
                    })
                })
            }
            let identification_verification = function idTable(valeur) {
                return new Promise((resolve, reject) => {
                    let request_identification = "SELECT * FROM tableau WHERE `idTable`= ? AND idTab!= ?"
                    db.query(request_identification, valeur, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length >= 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }
            
            let update_function = async () => {
                let   idTab = req.body.idTab
                let   identifica_ableau = req.body.identification_Tableau;
                let   activi_ableau = req.body.activite_Tableau;
                let   pilo_ableau =req.body.pilote_Tableau;
                let   ty_ableau=req.body.type_Tableau;
                let   da_debut_ableau= new Date(req.body.date_debut_Tableau);
                let   da_fin_ableau=new Date(req.body.date_fin_Tableau);
                let   tr_ableau=req.body.trim_Tableau;
                let   informa_ableau=req.body.information_Tableau;
                let   progre_ableau=req.body.progression_Tableau;
                let   pourcent_ableau=req.body.pourcentage_Tableau
                let droit_administrateur = req.body.droit_administrateur
                
                let verify_if_exist = await verification_exist(idTab)

                console.log(req.body)

                // if ( identifica_ableau.length >= 1 && identifica_ableau.length <= 10 && activi_ableau.length >= 5 && activi_ableau.length <= 255 && pilo_ableau.length >= 2 && pilo_ableau.length <= 10 &&  ty_ableau.length >= 5 && ty_ableau.length <= 50 && tr_ableau.length >= 1 && tr_ableau.length <= 10 && informa_ableau.length >= 5 && informa_ableau.length <= 255
                //     && progre_ableau.length >= 5 && progre_ableau.length <= 50 && pourcent_ableau.length >= 1 && pourcent_ableau.length <= 10) {
                    if (verify_if_exist === true) {
                        let numero_cols = [identifica_ableau, idTab]
                        let verify_numero = await identification_verification(numero_cols)
                        if (verify_numero === true) {
                            res.json({
                                title: 'Echec!',
                                message: "Ce identité sont déjà utilisé",
                                icon: 'info',
                                success: false
                            })
                        }
                        else {
                            let admin = 0
                            if (droit_administrateur === true) { admin = 1 }
                            let valeur_nouvelle = [identifica_ableau, activi_ableau, pilo_ableau,ty_ableau , da_debut_ableau, da_fin_ableau, tr_ableau, informa_ableau, progre_ableau, pourcent_ableau, idTab]
                            let update_success = await update_tableau(valeur_nouvelle)
                            if (update_success === true) {
                                res.json({
                                    title: 'Succès',
                                    message: "Les nouvelles informations ont bien été enregistrées",
                                    icon: 'success',
                                    success: true
                                })
                            }
                            else {
                                res.json({
                                    title: 'Error',
                                    message: 'Contacter le developpeur',
                                    icon: 'warning',
                                    success: false
                                })
                            }
                        }
                    }
                    else {
                        res.json({
                            title: "Echec!",
                            message: "Entrez des information valide",
                            icon: 'error',
                            success: false
                        })
                    }

                }
                // else {
                //     let message = ''
                //     if (identifica_ableau.length < 1 || identifica_ableau.length > 10) {
                //         if (identifica_ableau.length < 1) { message = "Identification trop court" }
                //         else { message = "Identification trop long" }
                //     }
                //     if (activi_ableau.length < 5 || activi_ableau.length > 255) {
                //         if (activi_ableau.length < 5) { message = "Activite trop court" }
                //         else { message = "Activite trop long" }
                //     }
                //     if (pilo_ableau.length < 2 || pilo_ableau.length > 10) {
                //         if (pilo_ableau.length < 2) { message = "Pilote trop court" }
                //         else { message = "Pilote trop long" }
                //     }

                //     if (ty_ableau.length < 5 || ty_ableau.length > 50) {
                //         if (ty_ableau.length < 5) { message = "Type incomplet" }
                //         else { message = "Type  invalide" }
                //     }
                //     if (tr_ableau.length < 1 || tr_ableau.length > 10) {
                //         if (tr_ableau.length < 1) { message = "Trim incomplet" }
                //         else { message = "Trim trop long" }
                //     }
                //     if (informa_ableau.length < 5 || informa_ableau.length > 255) {
                //         if (informa_ableau.length < 5) { message = "Derniere informations est trop court" }
                //         else { message = "Derniere informations trop long" }
                //     }
                //     if (progre_ableau.length < 5 || progre_ableau.length > 50) {
                //         if (progre_ableau.length < 5) { message = "Progression incomplet" }
                //         else { message = "Progression trop long" }
                //     }
                //     if (pourcent_ableau.length < 1 || pourcent_ableau.length > 10) {
                //         if (pourcent_ableau.length < 1) { message = "Pourcentage incomplet" }
                //         else { message = "Pourcentage trop long" }
                //     }
                //     res.json({
                //         title: "Erreur",
                //         message: message,
                //         icon: 'error',
                //         form_error: true
                //     })
                // }
            //}
            update_function()
        })
    }
}

module.exports = Tableau
