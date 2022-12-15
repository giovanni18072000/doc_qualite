class Users {
    constructor(app, db, validator) {
        this.create(app, db, validator)
        this.delete_users(app, db, validator)
        this.update_users(app, db, validator)
        this.all_users(app, db)
    }
    all_users(app, db) {
        app.get('/all_users', (req, res) => {
            let users_request = "SELECT * FROM utilisateur_apmf"
            db.query(users_request, (err, resultat) => {
                if (err) { throw err }
                res.json({
                    utilisateur: resultat
                })
            })
        })
    }
    create(app, db, validator) {
        app.post('/users_add', (req, res) => {
            console.log('on est dans le back end')
            let verification_utilisateur = function verify(valeur) {
                return new Promise((resolve, reject) => {
                    let request_search = "SELECT * FROM `utilisateur_apmf` WHERE `nom_utilisateur`=? AND `prenom_d_utilisateur`=? AND `contact`=? AND `whatsapp` =? AND `email`=? AND `admin`=? "
                    db.query(request_search, valeur, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length >= 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })

            }
            let contact_verification = function contact(valeur) {
                return new Promise((resolve, reject) => {
                    let request_contact = "SELECT * FROM utilisateur_apmf WHERE `contact`= ? OR `whatsapp` = ? OR `email`= ?"
                    db.query(request_contact, valeur, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length >= 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }
            let ajouter_users = function add_users(valeur) {
                return new Promise((resolve, reject) => {
                    let request_add = "INSERT INTO `utilisateur_apmf` (`id`, `nom_utilisateur`, `prenom_d_utilisateur`, `contact`, `whatsapp`, `email`, `admin`, `password`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)"
                    db.query(request_add, valeur, (e, resultat) => {
                        if (e) { throw e }
                        resolve(true)
                    })
                })
            }
            let ajouter_function = async () => {
                let name = req.body.name_user
                let surname = req.body.prenom_user
                let contact = req.body.contact
                let whatsapp = req.body.whatsapp_contact
                let password = req.body.password
                let email = req.body.email
                let admin = req.body.droit_administrateur

                let admin_number = 0
                if (admin === true) { admin_number = 1 }
                else { admin_number = 0 }

                let cols_contact = [contact, whatsapp, email]
                let cols_ajouter = [name, surname, contact, whatsapp, email, admin_number]
                let ajout_nouveau = [name, surname, contact, whatsapp, email, admin_number, password]
                let validation_email = validator.validate(email)
                if (validation_email === true && name.length >= 5 && name.length <= 50 && surname.length >= 5 && surname.length <= 50 && contact.length >= 5 && contact.length <= 15 && whatsapp.length >= 5 && whatsapp.length <= 15 && password.length >= 5 && password.length <= 50) {
                    let verify_if_exist = await verification_utilisateur(cols_ajouter)
                    if (verify_if_exist === true) {
                        res.json({
                            title: "Erreur",
                            message: "L'utilisateur existe déjà",
                            icon: 'info'
                        })
                    }
                    else {
                        let verify_contact = await contact_verification(cols_contact)
                        if (verify_contact === true) {
                            res.json({
                                title: "Erreur",
                                message: "L'email ou le numero de telephone ou le numero whatsapp est déjà utilisé",
                                icon: 'info'
                            })
                        }
                        else {
                            let add_success = await ajouter_users(ajout_nouveau)
                            if (add_success === true) {
                                res.json({
                                    title: 'Succès',
                                    message: "L'utilisateur a bien été enregistré",
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


                }
                else {
                    let message = ''
                    if (name.length < 5 || name.length > 50) {
                        if (name.length < 5) { message = "Nom d'utilisateur trop court" }
                        else { message = "Nom d'utilisateur trop long" }
                    }
                    ///surname.length >= 5 && surname.length <= 50 && contact.length >= 5 && contact.length <= 15 && whatsapp.length >= 5 && whatsapp.length <= 15 && password.length >= 5 && password.length <= 50
                    if (surname.length < 5 || surname.length > 50) {
                        if (surname.length < 5) { message = "Prenom d'utilisateur trop court" }
                        else { message = "Prenom de l'utilisateur trop long" }
                    }

                    if (contact.length < 5 || contact.length > 15) {
                        if (contact.length < 5) { message = "Numero incomplet" }
                        else { message = "Numero de telephone invalide" }
                    }
                    if (whatsapp.length < 5 || whatsapp.length > 15) {
                        if (whatsapp.length < 5) { message = "Numero whatsapp incomplet" }
                        else { message = "Numero whatsapp invalide" }
                    }
                    if (password.length < 5 || password.length > 15) {
                        if (password.length < 5) { message = "Au moins 5 caractère dans le mot de passe" }
                        else { message = "Mot de passe trop long" }
                    }
                    if (validation_email === false) { message = "Adresse e-mail invalide" }

                    res.json({
                        title: "Erreur",
                        message: message,
                        icon: 'error',
                        form_error: true
                    })
                }
            }
            ajouter_function()
        })
    }
    delete_users(app, db, validator) {
        app.delete('/delete_users', (req, res) => {
            let verification_exist = function verification_exist(id_delete) {
                return new Promise((resolve, request) => {
                    let verification_request = "SELECT * FROM `utilisateur_apmf` WHERE id = ?"
                    db.query(verification_request, id_delete, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length === 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }
            let delete_users = function delete_users(id_delete) {
                return new Promise((resolve, reject) => {
                    let delete_request = "DELETE FROM `utilisateur_apmf` WHERE `utilisateur_apmf`.`id` = ?"
                    db.query(delete_request, id_delete, (e, resultat) => {
                        if (e) { throw e }
                        resolve(true)
                    })
                })
            }
            let delete_function = async () => {
                let id = req.body.id
                let verify_exist = await verification_exist(id)
                if (verify_exist === true) {
                    let del_success_vf = await delete_users(id)
                    if (del_success_vf === true) {
                        res.json({
                            title: 'Succès',
                            message: "L'utilisateur a bien été supprimé",
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
    update_users(app, db, validator) {
        app.put('/update_users', (req, res) => {
            let verification_exist = function verification_exist(id_update) {
                return new Promise((resolve, request) => {
                    let verification_request = "SELECT * FROM `utilisateur_apmf` WHERE id = ?"
                    db.query(verification_request, id_update, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length === 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }
            let update_users = function modify_users(id_update) {
                return new Promise((resolve, reject) => {
                    let update_request = "UPDATE `utilisateur_apmf` SET `nom_utilisateur` = ?, `prenom_d_utilisateur` = ?, `contact` = ?, `whatsapp` = ?, `email` = ? , `admin` = ?, `password` = ? WHERE `utilisateur_apmf`.`id` = ?"
                    db.query(update_request, id_update, (e, resultat) => {
                        if (e) { throw e }
                        resolve(true)
                    })
                })
            }
            let contact_verification = function contact(valeur) {
                return new Promise((resolve, reject) => {
                    let request_contact = "SELECT * FROM utilisateur_apmf WHERE `contact`= ? AND id != ? OR `whatsapp` = ? AND id != ? OR `email`= ? AND id != ?"
                    db.query(request_contact, valeur, (e, resultat) => {
                        if (e) { throw e }
                        if (resultat && resultat.length >= 1) { resolve(true) }
                        else { resolve(false) }
                    })
                })
            }

            let update_function = async () => {
                let id = req.body.id
                let name = req.body.name_user
                let surname = req.body.prenom_user
                let contact = req.body.contact
                let whatsapp_contact = req.body.whatsapp_contact
                let password = req.body.password
                let email = req.body.email
                let validation_email = validator.validate(email)
                let droit_administrateur = req.body.droit_administrateur
                let verify_if_exist = await verification_exist(id)


                if (validation_email === true && name.length >= 5 && name.length <= 50 && surname.length >= 5 && surname.length <= 50 && contact.length >= 5 && contact.length <= 15 && whatsapp_contact.length >= 5 && whatsapp_contact.length <= 15 && password.length >= 5 && password.length <= 50) {
                    if (verify_if_exist === true) {
                        let contact_cols = [contact, id, whatsapp_contact, id, email, id]
                        let verify_contact = await contact_verification(contact_cols)
                        if (verify_contact === true) {
                            res.json({
                                title: 'Echec!',
                                message: "Ces coordonnées sont déjà utilisé",
                                icon: 'info',
                                success: false
                            })
                        }
                        else {
                            let admin = 0
                            if (droit_administrateur === true) { admin = 1 }
                            let valeur_nouvelle = [name, surname, contact, whatsapp_contact, email, admin, password, id]
                            let update_success = await update_users(valeur_nouvelle)
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
                    if (name.length < 5 || name.length > 50) {
                        if (name.length < 5) { message = "Nom d'utilisateur trop court" }
                        else { message = "Nom d'utilisateur trop long" }
                    }
                    ///surname.length >= 5 && surname.length <= 50 && contact.length >= 5 && contact.length <= 15 && whatsapp.length >= 5 && whatsapp.length <= 15 && password.length >= 5 && password.length <= 50
                    if (surname.length < 5 || surname.length > 50) {
                        if (surname.length < 5) { message = "Prenom d'utilisateur trop court" }
                        else { message = "Prenom de l'utilisateur trop long" }
                    }

                    if (contact.length < 5 || contact.length > 15) {
                        if (contact.length < 5) { message = "Numero incomplet" }
                        else { message = "Numero de telephone invalide" }
                    }
                    if (whatsapp_contact.length < 5 || whatsapp_contact.length > 15) {
                        if (whatsapp_contact.length < 5) { message = "Numero whatsapp incomplet" }
                        else { message = "Numero whatsapp invalide" }
                    }
                    if (password.length < 5 || password.length > 15) {
                        if (password.length < 5) { message = "Au moins 5 caractère dans le mot de passe" }
                        else { message = "Mot de passe trop long" }
                    }
                    if (validation_email === false) { message = "Adresse e-mail invalide" }

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
module.exports = Users