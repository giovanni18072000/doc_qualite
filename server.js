const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
//crud d'atttribution
const Attribution = require('./crudAttribution/crudattributions');
//crud tableau
const Tableau = require('./crudTableau/crudtableau');
//const searchtable = require('./crudTableau/searchtable')
const Progression_total = require ('./crudTableau/etat')
//utilisateur apmf
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Auth = require('./Authentification');
const Users = require('./Usersapmf/UsersCrud');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require("email-validator");
const path = require('path');

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
)
//creation de la connection avec la base de donne
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    ///database: 'entretieninformatique',//nom de la base de donnee
    database: 'gestionenregistrement',
    clearExpired: true,
    checkExpirationInterval: 86400000,
    expiration: 86400000
});

const sessionStore = new MySQLStore({
    expiration: 86400000,//temps d'expiration de la session
    createDatabaseTable: true,//creation d'une table contenant les session
    schema: {
        tableName: 'apmf_session',//nom de la table 
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data' 
        }
    }
}, db);

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    expiration: 86400000,
    resave: false,
    saveUninitialized: false
}))
//connection avec la base de donnée
db.connect(function (err) {
    if (err) {
        console.log('erreur de connection sur la base de donne')
        throw err
    }
});
//ajout d'attribution ,supprimer , modifier
new Attribution(app, db);
//ajout tableau ,supprimer , modifier
new Tableau(app,db)
//recherche pour tableau de bord
//new searchtable(app, db);
//progression statistique
new Progression_total(app,db);
//utilisateur apmf
new Auth(app, db, bcrypt, jwt);
new Users(app, db, validator);
//new Users(app, db)


app.listen(3005)


// const express = require('express');
// const app = express();
// const mysql = require('mysql');
// const cors = require('cors');
// const http = require("http");
// const { Server } = require("socket.io");

// const server = http.createServer(app);

// //crud d'atttribution
// const Attribution = require('./crudAttribution/crudattributions');
// //crud tableau
// const Tableau = require('./crudTableau/crudtableau');

// //utilisateur apmf
// const session = require('express-session');
// const MySQLStore = require('express-mysql-session')(session);
// const Auth = require('./Authentification');
// const Users = require('./Usersapmf/UsersCrud');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const validator = require("email-validator");
// const path = require('path');
// const searchtable = require('./crudTableau/searchtable');

// app.use(express.json());
// app.use(cors());
// const io = new Server(server, {
//     cors: {
//       origin: "http://localhost:3000",
//       methods: ["GET", "POST"],
//     },
//   });
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"],
//     })
// )

// io.on("connection", (socket) => {
//     console.log(`User Connected: ${socket.id}`);
  
//     socket.on("join_room", (data) => {
//       socket.join(data);
//       console.log(`User with ID: ${socket.id} joined room: ${data}`);
//     });
  
//     socket.on("send_message", (data) => {
//       socket.to(data.room).emit("receive_message", data);
//     });
  
//     socket.on("disconnect", () => {
//       console.log("User Disconnected", socket.id);
//     });
//   });
// //creation de la connection avec la base de donne
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     port: 3306,
//     ///database: 'entretieninformatique',//nom de la base de donnee
//     database: 'gestionenregistrement',
//     clearExpired: true,
//     checkExpirationInterval: 86400000,
//     expiration: 86400000
// });

// const sessionStore = new MySQLStore({
//     expiration: 86400000,//temps d'expiration de la session
//     createDatabaseTable: true,//creation d'une table contenant les session
//     schema: {
//         tableName: 'apmf_session',//nom de la table 
//         columnNames: {
//             session_id: 'session_id',
//             expires: 'expires',
//             data: 'data' 
//         }
//     }
// }, db);

// app.use(session({
//     key: 'session_cookie_name',
//     secret: 'session_cookie_secret',
//     store: sessionStore,
//     expiration: 86400000,
//     resave: false,
//     saveUninitialized: false
// }))
// //connection avec la base de donnée
// db.connect(function (err) {
//     if (err) {
//         console.log('erreur de connection sur la base de donne')
//         throw err
//     }
// });

// //ajout d'attribution ,supprimer , modifier
// new Attribution(app, db);
// //ajout tableau ,supprimer , modifier
// new Tableau(app,db)
// new searchtable(app, db);

// //utilisateur apmf
// new Auth(app, db, bcrypt, jwt);
// new Users(app, db, validator);
// //new Users(app, db)


// app.listen(3005)