exports.sendCreated = function (res, data) {
    return res.status(201).send(data);
};

exports.sendBadRequest = function (res, message) {
    return res.status(400).send({
        code: 400,
        msg: message
    });
};

exports.sendUnauthorized = function (res, message) {
    return res.status(401).send({
        code: 401,
        msg: message
    });
};

exports.sendForbidden = function (res) {
    return res.status(403).send({
        code: 403,
        msg: 'You do not have rights to access this resource.'
    });
};

exports.sendNotFound = function (res) {
    return res.status(404).send({
        code: 404,
        msg: 'Resource not found.'
    });
};

exports.sendNotWorking = function (res) {
    return res.status(500).send({
        code: 500,
        msg: 'This page not working.'
    });
};

exports.setHeadersForCORS = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-Access-Token, Content-Type, Accept");
    next();
}
