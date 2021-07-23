exports.auth = function (req, res, next) {
    if (!req.user) return JSON.stringify({
        msg: "Please login"
    })
    next();
}
exports.unAuth = function (req, res, next) {
    if (req.user) return JSON.stringify({
        msg: "You are logged in"
    })
    next();
}