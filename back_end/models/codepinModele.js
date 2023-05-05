import mongoose from "mongoose";

// schema codepin contenant les champs de notre tables codepins
const codepinSchema = new mongoose.Schema(
  {
    codepin: {
      //type chaine de caractere
      type: String,
      //longueur minimal
      minLength: 6,
      //longueur maximum
      maxLength: 6,
    },
    phone: {
      // chaine de caractere
      type: String,
      // obliatoire
      required: true,
      //pour supprimer les espacement en fin et debut de ligne
      trim: true,
    },
  },
  //   pour connaitre la date a laquelle le l'objet a été crée
  {
    timestamps: true,
  }
);

// creation de fontions statique pour les donnée (updatePinSchema.static("getPinById", getPinById);
codepinSchema.static("getPinByPhonePin", getPinByPhonePin);
codepinSchema.static("deletePin", deletePin);

// fonction qui recherche dans la base de donné
// le codepin spécifique a un user via son numero et le code généré
async function getPinByPhonePin(phone, pin) {
  const codepin = await this.findOne({ phone, pin })
    .sort({ createdAt: -1 })
    .limit(1);
  if (!codepin) return false;
  return codepin;
}

// fonction qui supprime dans la base de donné
// le codepin spécifique a un user via son email et le code généré
async function deletePin(email, pin) {
  const codepin = await this.findOneAndDelete({ email, pin });
  if (!codepin) return false;
  return codepin;
}

// Creation d'un Model(exemple) mongoose sur la base du Schéma
// Au cas ou je ne m'étais pas le nom de la collection alors on aura Users comme le nom de collection par defaut
const collectionName = "codepins";
export const codepinModel = mongoose.model(
  "Codepin",
  codepinSchema,
  collectionName
);
