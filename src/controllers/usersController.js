const path = require('path');
const fs = require('fs')
const users = require('../data/users.json');

const guardar = (data) => fs.writeFileSync(path.join(__dirname, '../data/users.json')
, JSON.stringify(data, null, 4), 'utf-8');


module.exports = {
    login: (req, res) => res.render('login'),
    // loginProcess: (req, res) => {
    //     const {email} = req.body
    //         let usuario = users.find(user => user.email === email)

    //         req.session.userLogin = {
    //             id : usuario.id,
    //             nombre : usuario.name,
    //             image : usuario.image,
    //             rol : usuario.rol
    //         }

    //         return res.redirect('/users/profile')
    // },
    register: (req, res) => res.render('register'),
    userCreate: (req, res) => {
        const {name, email, pass, avatar} = req.body;

        let newUser = {
            id: users[users.length -1].id + 1,
            name: name,
            email: email,
            pass: pass,
            rol: "usuario",
            avatar: ""
        };
        users.push(newUser); 
        guardar(users);

        res.redirect('/')
    },
    profile: (req, res) => {
        let usuario = users.find(user => user.email === email)
        res.render('profile', {usuario});
    }
}