module.exports = {
    admin: (req, res) => {
        res.render('admin/admin',{texto: `Hola Admin: ${req.admin}`});
    }
}