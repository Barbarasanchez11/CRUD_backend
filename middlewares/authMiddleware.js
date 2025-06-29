const admin = require('../firebase')

const authMiddleware =(req,res,next) => {
    const idCookie = req.cookies?.token
    if(!idCookie) {
       return res.redirect('/login')
    }
    auth.verifyIdToken(idCookie)
    .then(decodedToken => {
        req.user = decodedToken
        next()
    })
    .catch(err => err)
}
module.exports = authMiddleware