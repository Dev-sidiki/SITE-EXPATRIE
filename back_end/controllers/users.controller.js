import mongoose from "mongoose";
import { userModel } from "../models/userModel.js";

// la fonction qui retourne les info sur un utilisateur via son username
export async function searchUserController(req, res) {
  try {
    const username = { username: { $regex: req.query.username } };
    const users = await userModel.getUserByUsername(username);

    res.json({ users });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

// la fonction qui retourne le profil utilisateur
export async function getUserController(req, res) {
  try {
    // on recupere l'id depuis notre entete pour le passer en parametre
    const _id = req.user.id;

    // on vérifie si le paramètre qui est passé existe dans la base de donnée
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.send("ID inconnu :" + _id);
    }

    // on recherche le user via son id et on retourne ses infos
    const user = await userModel.getUserById(_id);

    if (!user) return res.status(400).json({ msg: "User does not exist." });

    res.json({ user });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

// afficher le profil utilisateur via l'id en parametre
export async function getUserByIdParamsController(req, res) {
  try {
    // on recupere l'id depuis notre entete pour le passer en parametre
    const { id } = req.params;

    // on vérifie si le paramètre qui est passé existe dans la base de donnée
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.send("ID inconnu :" + id);
    }

    // on recherche le user via son id et on retourne ses info
    const user = await userModel.getUserById(id);

    if (!user) return res.status(400).json({ msg: "User does not exist." });

    res.json({ user });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

// on retourne les info de tous les users
export async function getAllUserController(req, res) {
  const users = await userModel.getAllUsers();
  res.send(users);
}

// on modifie le profil user
export async function updateUserController(req, res) {
  try {
    // on recupère l'id du user connecté
    const _id = req.user.id;

    // on verifie l'id
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.send("ID inconnu :" + _id);
    }

    // on récupère les saisis utilisateurs
    const {
      newFirstname,
      newLastname,
      newEmail,
      newAvatar,
      newPhone,
      newAddress,
      newGender,
      newBiographie,
      neWebsite,
      newLeisure,
    } = req.body;
    if (!newFirstname || !newLastname)
      return res.status(400).json({ msg: "Please add your full name." });

    // on modifie le profil user
    // mettre dans le même ordre que la fonction statique de la database
    await userModel.updateUserProfil(
      _id,
      newFirstname,
      newLastname,
      newEmail,
      newAvatar,
      newPhone,
      newAddress,
      newGender,
      newBiographie,
      neWebsite,
      newLeisure
    );

    // reponse en cas de succès
    res.json({ msg: "Update Success!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

// fonction pour s'abonner à un utilisateur
export async function followUserController(req, res) {
  try {
    // on verifie si on n'est déjà abonnée a l'utilisateur
    const user = await userModel.find({
      _id: req.params.id,
      followers: req.user.id,
    });
    if (user.length > 0)
      return res.status(500).json({ msg: "You followed this user." });

    // on s'abonne si ce n'est pas encore fait
    const newUser = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { followers: req.user.id },
      },
      { new: true }
    );

    // on ajoute l'utilisateur dans la liste des personnes qu'on suivent(following)
    await userModel.findOneAndUpdate(
      { _id: req.user.id },
      {
        $push: { follo68wing: req.params.id },
      },
      { new: true }
    );

    res.json({ newUser });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

// fonction pour se désabonner à un utilisateur
export async function unfollowUserController(req, res) {
  try {
    // on se désabonne a l'utilisateur
    const newUser = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $pull: { followers: req.user._id },
      },
      { new: true }
    );

    // on retire l'id de l'utilisateur de la liste des personnes au quelle on s'abonne
    await userModel.findOneAndUpdate(
      { _id: req.user._id },
      {
        $pull: { following: req.params.id },
      },
      { new: true }
    );

    res.json({ newUser });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

// fonction pour suggerer des amis à un user
export async function suggestionUserController(req, res) {
  try {
    //un tab contenant les id des personnes que on suivent
    // ainsi que l'id du user connecté
    const newArr = [...req.user.following, req.user._id];

    const num = req.query.num || 10;
    console.log(num);

    // on recherche 10 utilisateurs qui ne font pas partir de
    // newArr et les affcihés aux hasards
    const users = await userModel
      .aggregate([
        {
          $match: {
            _id: { $nin: newArr },
          },
        },
        { $sample: { size: Number(num) } },
        {
          $lookup: {
            from: "users",
            localField: "followers",
            foreignField: "_id",
            as: "followers",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "following",
            foreignField: "_id",
            as: "following",
          },
        },
      ])
      .project("-password");

    return res.json({
      users,
      result: users.length,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

// fonction de suppression d'un utlisateur
export async function deleteUserController(req, res) {
  // on recupere l'id depuis notre entete pour le passer en parametre
  const { _id } = req.params;

  const deleteUser = await userModel.deleteUser(_id);
  res.send(deleteUser);
}
