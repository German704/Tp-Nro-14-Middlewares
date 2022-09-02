const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {
    fs.appendFileSync(path.join(__dirname, '..', 'logs', 'usersLogs.txt'), `El usuario ingresó a la ruta: ${req.url} \n`, 'utf-8');

    next()
}