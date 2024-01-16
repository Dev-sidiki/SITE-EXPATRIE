import mongoose from "mongoose";
import { eventModel } from "../models/eventModel.js";

// fonction de création d'un ticket
export async function createEventController(req, res) {
  //   console.log(req);
  // on recupère les saisie du user
  const {
    evenTitle,
    eventCategory,
    eventPlace,
    eventAdress,
    eventDateTime,
    eventDuration,
    eventDescription,
  } = req.body;

  // on recupere l'id du user connecté depuis notre entete
  const organizerId = req.user.id;
  const eventCoverPicture = req.file.filename;
  // console.log(decodedId);

  // variable de gestion des erreurs
  let errors = {
    message: "",
  };

  // les différente verification
  if (!req.body) {
    errors.message = "Veuillez remplir tous les champs";
    return res.json({ errors });
  }

  if (new Date(eventDateTime) < new Date()) {
    return res
      .status(400)
      .json({ message: "La date est antérieure à aujourd'hui." });
  }

  const existingEvent = await eventModel.getEventByEventDateTime(
    organizerId,
    eventDateTime
  );

  if (existingEvent) {
    return res.status(400).json({
      message: "L'organisateur a déjà un événement à la même date et heure.",
    });
  }

  // création de l'évènement
  try {
    if (!req.file) {
      const newEvent = new eventModel({
        userId: decodedId,
        evenTitle,
        eventCategory,
        eventPlace,
        eventAdress,
        eventDateTime,
        eventDuration,
        eventDescription,
      });

      const event = await newEvent.save();
      if (event) {
        return res.status(200).json({
          statut: "évènement crée sans photo de couverture",
          message: "Un nouveau évènement a été ajoué à la liste des évènements",
          event,
        });
      }
    } else {
      const newEvent = new eventModel({
        userId: decodedId,
        evenTitle,
        eventCategory,
        eventPlace,
        eventAdress,
        eventDateTime,
        eventDuration,
        eventDescription,
        eventCoverPicture: `${req.protocol}://${req.get(
          "host"
        )}/images/${eventCoverPicture}`,
      });

      const event = await newEvent.save();

      if (event) {
        res.status(200).json({
          statut: "évènement crée avec photo de couverture",
          message: "un utilisateur à été crée avec photo de profil",
          userId: user._id,
          dataImage: {
            name: req.file.filename,
            mimetype: req.file.mimetype,
            size: req.file.size,
          },
        });
      }
    }
  } catch (err) {
    // sinon on retourne le message d'erreur
    return res.send(err);
  }
}

// fonction d'affichage des évènements associés à un user
export async function getEventUserController(req, res) {
  try {
    const userId = req.user.id;
    const myEvent = await eventModel.getEvents(userId);

    if (myEvent.length == 0) {
      return res.status(200).json({
        statut: "vide",
        message: "Vous n'avez aucun évènement en ce moment",
      });
    }

    return res.status(200).json({
      statut: "réussi",
      message: "Vous verrez ci-dessous la liste de vos évènement",
      tickets,
    });
  } catch (err) {
    return res.send(err.message);
  }
}

// fonction d'affichage des évènements associés à un user
export async function getOtherEventUserController(req, res) {
  try {
    const userId = req.user.id;
    const otherEvent = await eventModel.getOtherEvents(userId);

    if (otherEvent.length == 0) {
      return res.status(200).json({
        statut: "vide",
        message: "Vous n'avez aucun évènement crée par autrui",
      });
    }

    return res.status(200).json({
      statut: "réussi",
      message: "Vous verrez ci-dessous la liste de vos évènement",
      tickets,
    });
  } catch (err) {
    return res.send(err.message);
  }
}

// la fonction qui retourne la liste de tous les évènement
export async function getAllEventController(req, res) {
  try {
    const allEvents = await eventModel.getAllEvents();

    if (allEvents.length == 0) {
      return res.status(200).json({
        statut: "vide",
        message: "Vous n'avez aucun évènement en ce moment",
      });
    }
    return res.status(200).json({
      statut: "réussi",
      message: "Vous verrez ci-dessous la liste des évènements",
      tickets,
    });
  } catch (err) {
    return res.send(err.message);
  }
}

//fonction d'affichage d'un evenement spécifique associés à un user
export async function getEventUserByIdParamController(req, res) {
  try {
    const userId = req.user.id;
    const { _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.send("ID inconnu :" + _id);
    }

    if (_id === clienId) {
      return res.send("parametre évènement incorrect:" + _id);
    }

    const event = await eventModel.getTicketById(_id, userId);

    return res.status(200).json({
      statut: "réussi",
      message: "Vous verrez ci-dessous les details sur l'évènement",
      event,
    });
  } catch (err) {
    // sinon on retourne le message d'erreur
    return res.send(err.message);
  }
}

// fonction de suppression d'un évènement
export async function deleteEventController(req, res) {
  try {
    const userId = req.user.id;

    // on recupere l'id de l'évènement
    const { _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.send("ID inconnu :" + _id);
    }

    // on verifie si le parametre est exactement l'id de l'évènement
    if (_id === userId) {
      return res.send("parametre évènement incorrect:" + _id);
    }

    const event = await eventModel.deleteEvent(_id);

    if (!event) {
      return res.status(404).json({ message: "Événement non trouvé" });
    }
    // reponse si tout se passe bien
    return res.status(200).json({
      statut: "supprimé",
      message:
        "L'évènement a été supprimé, il ne se trouve plus dans la liste de vos évènements",
    });
  } catch (err) {
    // sinon on retourne le message d'erreur
    return res.send(err.message);
  }
}

// fonction de modification d'évènement
export async function updateEventController(req, res) {
  try {
    // on recupere l'id de l'évnemen
    const { _id } = req.params;

    // on recupère l'id du user connecté
    const userId = req.user.id;

    // nouvelle saisie
    const {
      newEventCoverPicture,
      newEventCategory,
      newEvenTitle,
      newEventDescription,
      newEventPlace,
      newEventDateTime,
      newEventDuration,
    } = req.body;

    // on vérifie si le paramètre qui est passé existe dans la base de donnée
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.send("ID inconnu :" + _id);
    }

    // on verifie si le parametre est exactement l'id du ticket
    if (_id === userId) {
      return res.send("parametre évènement  incorrect:" + _id);
    }

    // si l'id est correcte,
    // on modifie depuis la base de donnée
    const updatedEvent = await eventModel.updateEvent({
      _id,
      userId,
      newEventCoverPicture,
      newEventCategory,
      newEvenTitle,
      newEventDescription,
      newEventPlace,
      newEventDateTime,
      newEventDuration,
    });

    // reponse si tout se passe bien
    if (updatedEvent._id) {
      return res.status(200).json({
        statut: "succès",
        message: "l'évènement à été modifié",
      });
    }
    // reponse en cas de soucis
    res.json({
      status: "erreur",
      message: "l'évènement n'a pas pu être modifié",
    });
  } catch (err) {
    // sinon on retourne le message d'erreur
    return res.send(err.message);
  }
}

// fonction de modification d'évènement
export async function updateEventStatusController(req, res) {
  try {
    const allEvents = await eventModel.getAllEvents();

    // Obtenir la date actuelle
    const currentDate = new Date();

    const eventsWithStatus = allEvents.map((event) => {
      if (event.eventDateTime < currentDate) {
        event.eventStatus = "passé";
      } else if (event.date.toDateString() === currentDate.toDateString()) {
        event.eventStatus = "aujourd'hui";
      } else {
        event.eventStatus = "à venir";
      }
      return event;
    });
    return res.status(200).json(eventsWithStatus);
  } catch (err) {
    // sinon on retourne le message d'erreur
    return res.send(err.message);
  }
}
