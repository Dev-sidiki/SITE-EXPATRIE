
export default function loadUser(req, res, next) {
    if (req.params.userId) {
      Users.findOne({ id: req.params.userId }, function (err, user) {
        if (err) {
          next(new Error("Couldn't find user: " + err));
          return;
        }
  
        req.user = user;
        next();
      });
    } else {
      next();
    }
  }
  
  // Autorise uniquement l'accès à la page si l'utilisateur est un administrateur.
  // Nécessite l'utilisation du middleware `loadUser`.
  export default function requireAdmin(req, res, next) {
    if (!req.user || !req.user.admin) {
      next(new Error("Permission denied."));
      return;
    }
  
    next();
  }
  