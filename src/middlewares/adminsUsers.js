module.exports = (req, res, next) => {
    const {user} = req.query;
    const admins = ["Ada", "Greta", "Vim", "Tim"];
    if(admins.includes(user)){
        req.admin = user;
        return next();
    } else {
        res.render('admin/admin', {texto: 'No tienes los privilegios para ingresar'})
    }

}