const db = require("../databse/models");
const bcryptjs = require("bcryptjs");
const op = db.Sequelize.Op;
const users= db.User;

const usersController = {
    showregister: function(req, res){
        return res.render('register');
    },

    showlogin: function(req, res){
        return res.render('login');
    },
    register: function(req, res){
        let form = req.body;
        let filtrado = {
            where: {email: form.email}
        };
        if (form.email == ""){
            return res.send("Ingrese un email");
        } else if(form.usuario == ""){
            return res.send("Ingrese su nombre de usuario");
        } else if(form.password == ""){
            return res.send("Ingrese su contraseña");
        }
        form.password = bcryptjs.hashSync(form.password, 10);
        users.findOne(filtrado)
        .then(function(email){
            if(email){
                return res.send("Este email ya esta registrado");
            }else{
                users.create(form)
                .then(function(results){
                return res.redirect("/products");
                })
                .catch(function(e){
                return console.log(e);
                })
            }
        })
        .catch(function(e){
            return console.log(e);
    })
    },
};

module.exports = usersController;