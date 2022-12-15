class Attribution {
    constructor(app, db, validator) {
         this.all_attribution(app, db);
         this.newattribu(app, db);
         this.delete_attributions(app, db, validator)
         this.update_attributions(app, db, validator)
    }
    all_attribution(app, db){
        app.get('/all_attribution', (request, response) => {
            const request_attribution = "SELECT * FROM attribution ORDER BY numAttr";
            db.query(request_attribution, (err, resultat) => {
                if(err) throw err;
                response.json(resultat);
                })
        })
    }
    newattribu(app, db) {
        app.post('/newattribu', (req, res) => {
            console.log('on est dans le back end')
            let numAttr_verification = function numAttr(valeur) {
                return new Promise((resolve, reject) => {
                    let request_numAttr = "SELECT * FROM attribution WHERE `numAttr`= ? "
                    db.query(request_numAttr, valeur, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length >= 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }
            let ajouter_attribution = function add_attribution(valeur) {
                return new Promise((resolve, reject) => {
                    let request_add = "INSERT INTO `attribution` (`idAttr`, `numAttr`, `nomAttr`, `prenomAttr`,`dateAttr`,`posteAttr`,`missionsAttr`,`activiteAttr`,`superieurAttr`,`diplomeAttr`,`autreCompAttr`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
                    db.query(request_add, valeur, (e, resultat) => {
                        if (e) { throw e }
                        resolve(true)
                    })
                })
            }
            let ajouter_function = async () => {
                
                let numero_ttribution = req.body.numero_Attribution;
                let  nom_ttribution = req.body.nom_Attribution;
                let   prenom_ttribution =req.body.prenom_Attribution;
                let   date_ttribution=new Date(req.body.date_Attribution);
                let   poste_ttribution= req.body.poste_Attribution;
                let   missions_ttribution=req.body.missions_Attribution;
                let   activite_ttribution=req.body.activite_Attribution;
                let   superieur_ttribution=req.body.superieur_Attribution;
                let   diplome_ttribution=req.body.diplome_Attribution;
                let    autreComp_ttribution=req.body.autreComp_Attribution

                console.log(req.body);//terminal 

                let cols_numAttr = [numero_ttribution]
                let ajout_nouveau = [numero_ttribution, nom_ttribution, prenom_ttribution, date_ttribution,poste_ttribution ,missions_ttribution,activite_ttribution,superieur_ttribution,diplome_ttribution,autreComp_ttribution]
                if ( numero_ttribution.length >= 1 && numero_ttribution.length <= 10 && nom_ttribution.length >= 5 && nom_ttribution.length <= 50 && prenom_ttribution.length >= 5 && prenom_ttribution.length <= 50 &&  poste_ttribution.length >= 5 && poste_ttribution.length <= 50 && missions_ttribution.length >= 5 && missions_ttribution.length <= 255 && activite_ttribution.length >= 5 && activite_ttribution.length <= 255 && superieur_ttribution.length >= 5 && superieur_ttribution.length <= 50
                     && diplome_ttribution.length >= 5 && diplome_ttribution.length <= 50 && autreComp_ttribution.length >= 5 && autreComp_ttribution.length <= 50
                    ){
                        let verify_numAttr = await numAttr_verification(cols_numAttr)
                        if (verify_numAttr === true) {
                            res.json({
                                title: "Erreur",
                                message: "Le numero immatricule est déjà utilisé",
                                icon: 'info'
                            })
                        }
                        else {
                            let add_success = await ajouter_attribution(ajout_nouveau)
                            if (add_success === true) {
                                res.json({
                                    title: 'Succès',
                                    message: "L'attribution a bien été enregistré",
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
                    if (numero_ttribution.length < 1 || numero_ttribution.length > 10) {
                        if (numero_ttribution.length < 1) { message = "Numero d'utilisateur trop court" }
                        else { message = "Numero d'utilisateur trop long" }
                    }
                    if (nom_ttribution.length < 5 || nom_ttribution.length > 50) {
                        if (nom_ttribution.length < 5) { message = "Nom d'utilisateur trop court" }
                        else { message = "Nom de l'utilisateur trop long" }
                    }
                    if (prenom_ttribution.length < 5 || prenom_ttribution.length > 50) {
                        if (prenom_ttribution.length < 5) { message = "Prenom d'utilisateur trop court" }
                        else { message = "Prenom de l'utilisateur trop long" }
                    }

                    if (poste_ttribution.length < 5 || poste_ttribution.length > 50) {
                        if (poste_ttribution.length < 5) { message = "Poste incomplet" }
                        else { message = "Poste  invalide" }
                    }
                    if (missions_ttribution.length < 5 || missions_ttribution.length > 255) {
                        if (missions_ttribution.length < 5) { message = "Rapport de missions incomplet" }
                        else { message = "Rapport de missions invalide" }
                    }
                    if (activite_ttribution.length < 5 || activite_ttribution.length > 255) {
                        if (activite_ttribution.length < 5) { message = "Rapport de activitte incomplet" }
                        else { message = "Rapport de activitte trop long" }
                    }
                    if (superieur_ttribution.length < 5 || superieur_ttribution.length > 50) {
                        if (superieur_ttribution.length < 5) { message = "Superieur est trop court" }
                        else { message = "Superieur trop long" }
                    }
                    if (diplome_ttribution.length < 5 || diplome_ttribution.length > 50) {
                        if (diplome_ttribution.length < 5) { message = "diplome incomplet" }
                        else { message = "diplome trop long" }
                    }
                    if (autreComp_ttribution.length < 5 || autreComp_ttribution.length > 50) {
                        if (autreComp_ttribution.length < 5) { message = "Competence incomplet" }
                        else { message = "Competence trop long" }
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

    delete_attributions(app, db, validator) {
        app.delete('/delete_attributions', (req, res) => {
            let verification_exist = function verification_exist(id_delete) {
                return new Promise((resolve, request) => {
                    let verification_request = "SELECT * FROM `attribution` WHERE idAttr = ?"
                    db.query(verification_request, id_delete, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length === 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }
            let delete_attributions = function delete_attributions(id_delete) {
                return new Promise((resolve, reject) => {
                    let delete_request = "DELETE FROM `attribution` WHERE `attribution`.`idAttr` = ?"
                    db.query(delete_request, id_delete, (e, resultat) => {
                        if (e) { throw e }
                        resolve(true)
                    })
                })
            }
            let delete_function = async () => {
                let idAttr = req.body.idAttr
                let verify_exist = await verification_exist(idAttr)
                if (verify_exist === true) {
                    let del_success_vf = await delete_attributions(idAttr)
                    if (del_success_vf === true) {
                        res.json({
                            title: 'Succès',
                            message: "L'attribution a bien été supprimé",
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

    update_attributions(app, db, validator) {
        app.put('/update_attributions', (req, res) => {
            let verification_exist = function verification_exist(id_update) {
                return new Promise((resolve, request) => {
                    let verification_request = "SELECT * FROM `attribution` WHERE idAttr = ?"
                    db.query(verification_request, id_update, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length === 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }
            let update_attributions = function modify_attributions(id_update) {
                return new Promise((resolve, reject) => {
                    let update_request = "UPDATE `attribution` SET `numAttr` = ?, `nomAttr` = ?, `prenomAttr` = ?, `dateAttr` = ?, `posteAttr` = ?, `activiteAttr` = ? , `missionsAttr` = ? ,`superieurAttr` = ? ,`diplomeAttr` = ?, `autreCompAttr` = ? WHERE `attribution`.`idAttr` = ?"
                    db.query(update_request, id_update, (e, resultat) => {
                        if (e) { throw e }
                        resolve(true)
                    })
                })
            }
            let numero_verification = function numero(valeur) {
                return new Promise((resolve, reject) => {
                    let request_numero = "SELECT * FROM attribution WHERE `numAttr`= ? AND idAttr != ?"
                    db.query(request_numero, valeur, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length >= 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }
            
            let update_function = async () => {
                let idAttr = req.body.idAttr
                let numer_ttribution = req.body.numero_Attribution;
                let no_ttribution = req.body.nom_Attribution;
                let preno_ttribution =req.body.prenom_Attribution;
                let dat_ttribution=new Date(req.body.date_Attribution);
                let post_ttribution= req.body.poste_Attribution;
                let mission_ttribution=req.body.missions_Attribution;
                let activit_ttribution=req.body.activite_Attribution;
                let superieu_ttribution=req.body.superieur_Attribution;
                let diplom_ttribution=req.body.diplome_Attribution;
                let autreCom_ttribution=req.body.autreComp_Attribution
                
                let verify_if_exist = await verification_exist(idAttr)

                console.log(req.body)

                if (numer_ttribution.length >= 1 && numer_ttribution.length <= 10 && no_ttribution.length >= 5 && no_ttribution.length <= 50 && preno_ttribution.length >= 5 && preno_ttribution.length <= 50 &&  post_ttribution.length >= 5 && post_ttribution.length <= 50 && mission_ttribution.length >= 5 && mission_ttribution.length <= 255 && activit_ttribution.length >= 5 && activit_ttribution.length <= 255 && superieu_ttribution.length >= 5 && superieu_ttribution.length <= 50
                    && diplom_ttribution.length >= 5 && diplom_ttribution.length <= 50 && autreCom_ttribution.length >= 5 && autreCom_ttribution.length <= 50) {
                    if (verify_if_exist === true) {
                        let numero_cols = [numer_ttribution, idAttr]
                        let verify_numero = await numero_verification(numero_cols)
                        if (verify_numero === true) {
                            res.json({
                                title: 'Echec!',
                                message: "Ce numero sont déjà utilisé",
                                icon: 'info',
                                success: false
                            })
                        }
                        else {
                            // let admin = 0
                            // if (droit_administrateur === true) { admin = 1 }
                            let valeur_nouvelle = [numer_ttribution, no_ttribution, preno_ttribution, dat_ttribution,post_ttribution ,mission_ttribution,activit_ttribution,superieu_ttribution,diplom_ttribution,autreCom_ttribution ,idAttr]
                            let update_success = await update_attributions(valeur_nouvelle)
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
                else {
                    let message = ''
                    if (numer_ttribution.length < 1 || numer_ttribution.length > 10) {
                        if (numer_ttribution.length < 1) { message = "Numero d'utilisateur trop court" }
                        else { message = "Numero d'utilisateur trop long" }
                    }
                    if (no_ttribution.length < 5 || no_ttribution.length > 50) {
                        if (no_ttribution.length < 5) { message = "Nom d'utilisateur trop court" }
                        else { message = "Nom de l'utilisateur trop long" }
                    }
                    if (preno_ttribution.length < 5 || preno_ttribution.length > 50) {
                        if (preno_ttribution.length < 5) { message = "Prenom d'utilisateur trop court" }
                        else { message = "Prenom de l'utilisateur trop long" }
                    }
                    if (post_ttribution.length < 5 || post_ttribution.length > 50) {
                        if (post_ttribution.length < 5) { message = "Poste incomplet" }
                        else { message = "Poste  invalide" }
                    }
                    if (mission_ttribution.length < 5 || mission_ttribution.length > 255) {
                        if (mission_ttribution.length < 5) { message = "Rapport de missions incomplet" }
                        else { message = "Rapport de missions invalide" }
                    }
                    if (activit_ttribution.length < 5 || activit_ttribution.length > 255) {
                        if (activit_ttribution.length < 5) { message = "Rapport de activitte incomplet" }
                        else { message = "Rapport de activitte trop long" }
                    }
                    if (superieu_ttribution.length < 5 || superieur_ttribution.length > 50) {
                        if (superieu_ttribution.length < 5) { message = "Superieur est trop court" }
                        else { message = "Superieur trop long" }
                    }
                    if (diplom_ttribution.length < 5 || diplom_ttribution.length > 50) {
                        if (diplom_ttribution.length < 5) { message = "diplome incomplet" }
                        else { message = "diplome trop long" }
                    }
                    if (autreCom_ttribution.length < 5 || autreCom_ttribution.length > 50) {
                        if (autreCom_ttribution.length < 5) { message = "Competence incomplet" }
                        else { message = "Competence trop long" }
                    }
                    res.json({
                        title: "Erreur",
                        message: message,
                        icon: 'error',
                        form_error: true
                    })
                }
            }
            update_function()
        })
    }
}

module.exports = Attribution
