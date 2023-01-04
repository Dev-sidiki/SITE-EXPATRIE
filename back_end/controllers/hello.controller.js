//fonction d'affichage d'un ticket unique associés à un user
export async function sayHelloController(req, res) {
  try {
    return res.status(200).json({
      statut: "réussi",
      message: "Hello tout le monde",
    });
  } catch (err) {
    // sinon on retourne le message d'erreur
    return res.send(err.message);
  }
}
