const SECRET_KEY = 'GoingMerry';

function authMiddleware(req, res, next) {
    console.log("Clave recibida:", req.query.secretKey);
    const userKey = req.query.secretKey;

    if (userKey && userKey === SECRET_KEY) {
        next();
    } else {
        res.status(401).json({ error: "🚨 Acceso no autorizado 🚨" });
    }
}


export default authMiddleware