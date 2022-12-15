class Authentification {
    constructor(app, db, bcrypt, jwt) {
        this.login(app, db, bcrypt, jwt)
        this.logout(app, db)
        this.isLoggedIn(app, db, bcrypt, jwt)
    }
    login(app, db, bcrypt, jwt) {
        app.post('/login', (req, res) => {
            console.log(req.session.username + " voici l ouverture de nom")
            //receuille des information envoyer de la partie front end 
            let adresse_electronique = req.body.username
            let password = req.body.password
            adresse_electronique = adresse_electronique.toLowerCase()
            if (adresse_electronique.legnth > 20 || password.length > 20) {
                res.json({
                    title: 'Erreur',
                    message: "Nom d'utilisateur ou mot de passe long",
                    icon: 'error',
                    success: false
                });
            }
            let cols = [adresse_electronique, adresse_electronique, adresse_electronique, adresse_electronique]
            //let cols = [adresse_electronique, password]
            //requete sql 
            db.query("SELECT * FROM utilisateur_apmf WHERE nom_utilisateur = ? OR contact = ? OR whatsapp = ? OR email = ?", cols, (err, data) => {
                if (err) { throw err }
                //trouve un utilisteur dans la base de donnees 
                if (data && data.length === 1) {
                    let datapass = bcrypt.hashSync(data[0].password, 9)
                    bcrypt.compare(password, datapass, (bcrypErr, verified) => {
                        if (verified) {
                            //l'utilisateur existe et le mot de passe corresponds avec celle de la base de donnee
                            req.session.userID = data[0].id
                            res.json({
                                success: true,
                                username: data[0].nom_utilisateur,
                                userId: data[0].id,
                                admin: data[0].admin,
                                usersInformation: data[0],
                                //token d'authentification envoyer de la partie back end
                                token: jwt.sign(
                                    { userId: data[0].id },
                                    'RANDOM_TOKEN_SECRET',
                                    { expiresIn: '24h' }
                                )
                            });
                        }
                        else {
                            res.json({
                                title: 'Erreur',
                                message: "Mot de passe invalide",
                                icon: 'error',
                                success: false
                            });
                        }
                    });

                }
                else {
                    res.json({
                        title: 'Erreur',
                        message: "Aucun utilisateur trouve",
                        icon: 'error',
                        success: false
                    });
                }

            });
        });
    }
    logout(app, db) {
        app.post('/logout', (req, res) => {
             //console.log(req.session.userID + " voici l ouverture de la session")
            if (req.session.userID) {
                req.session.destroy()
                res.json({
                    success: true
                });
            }
            else {
                res.json({
                    success: false
                });
            }
        });

    }
    isLoggedIn(app, db, bcrypt, jwt) {
        app.post('/isLoggedIn', (req, res) => {
            if (req.session.userID) {
                let cols = [req.session.userID];
                db.query("SELECT * FROM utilisateur_apmf WHERE id = ? LIMIT 1", cols, (err, data) => {
                    if (err) { throw err }
                    if (data && data.length === 1) {
                        res.json({
                            success: true,
                            username: data[0].nom_utilisateur,
                            userId: data[0].id,
                            admin: data[0].admin,
                            usersInformation: data[0],
                            //token d'authentification envoyer de la partie back end
                            token: jwt.sign(
                                { userId: data[0].id },
                                'RANDOM_TOKEN_SECRET',
                                { expiresIn: '24h' }
                            )
                        });
                    }
                    else {
                        res.json({
                            success: false
                        });
                    }
                });
            }
            else {
                res.json({
                    success: false
                });
            }
        });
    }
}
module.exports = Authentification