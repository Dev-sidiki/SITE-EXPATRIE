import mongoose from "mongoose";

// creation du des champs de la collection tickets
const EventSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    eventCoverPicture: {
      type: String,
      required: true,
    },
    eventCategory: {
      type: String,
      required: true,
    },
    evenTitle: {
      type: String,
      required: true,
    },
    eventDescription: {
      type: String,
      required: true,
    },
    eventPlace: {
      type: String,
      required: true,
    },

    eventAdress: {
      type: String,
      required: true,
    },
    listParticipant: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    listInterested: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    eventDateTime: {
      type: Date,
      required: true,
    },
    eventDuration: {
      type: String,
      required: true,
    },
    eventStatus: {
      type: String,
      default: "à venir",
    },
    isReported: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    // met la date d'ajout et de modification automatiqment
    timestamps: true,
  }
);

// creation de fontions statique pour les donnée (CRUD users)
EventSchema.static("getEvents", getEvents);
EventSchema.static("getOtherEvents", getOtherEvents);
EventSchema.static("getAllEvents", getAllEvents);
EventSchema.static("getEventById", getEventById);
EventSchema.static("getEventByEventDateTime", getEventByEventDateTime);
EventSchema.static("getEventByAdmin", getEventByAdmin);
EventSchema.static("updateEvent", updateEvent);
EventSchema.static("addToParticipantList", addToParticipantList);
EventSchema.static("addToInterestedList", addToInterestedList);
EventSchema.static("updateStatusPastEvent", updateStatusPastEvent);
EventSchema.static("updateStatusTodayEvent", updateStatusTodayEvent);
EventSchema.static("deleteEvent", deleteEvent);

// ==================================
// LES REQUÊTES DE LA BASE DE DONNÉE
// ==================================

// fonction qui recherche dans la base de donné
// les évènements spécifique a un user via son id du client
async function getEvents(userId) {
  const events = await this.find({ userId }).sort({ createdAt: -1 });
  if (!events) return false;
  return events;
}

// fonction qui recherche dans la base de donné
// les évènements spécifique a d'autre user via son id du client
async function getOtherEvents(userId) {
  const events = await this.find({ userId: { $ne: userId } }).sort({
    createdAt: -1,
  });
  if (!events) return false;
  return events;
}

// la fonction qui cherche la liste de tous les évènements pour nous les afficher
// depuis la base de donnée vers le front
async function getAllEvents() {
  // n'affiche pas le password en front
  const allEvents = await this.find().sort({ createdAt: -1 }).select();
  return allEvents;
}

// fonction qui recherche dans la base de donné
// un évènement unique associé a un user via  id Utilisateur et l'id de l'évènement
async function getEventById(_id, userId) {
  const event = await this.find({ _id, userId });
  if (!event) return false;
  return event;
}

// fonction qui recherche dans la base de donné
// un évènement unique associé a un user via  id Utilisateur et la date de l'évènement
async function getEventByEventDateTime(_id, eventDateTime) {
  const event = await this.find({ _id, eventDateTime });
  if (!event) return false;
  return event;
}

// fonction qui recherche dans la base de donné
// un ticket unique associé a un user via  idClient et l'id du ticket
async function getEventByAdmin(_id) {
  const event = await this.find({ _id }).select();
  if (!event) return false;
  return event;
}

async function updateEvent(
  _id,
  userId,
  newEventCoverPicture,
  newEventCategory,
  newEvenTitle,
  newEventDescription,
  newEventPlace,
  newEventDateTime,
  newEventDuration
) {
  const newEvent = await this.findOneAndUpdate(
    { _id, userId },
    {
      $set: {
        eventCoverPicture: newEventCoverPicture,
        eventCategory: newEventCategory,
        evenTitle: newEvenTitle,
        eventDescription: newEventDescription,
        eventPlace: newEventPlace,
        eventDateTime: newEventDateTime,
        eventDuration: newEventDuration,
      },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newEvent;
}

async function addToParticipantList({ _id, participantId }) {
  const newParticipant = await this.findOneAndUpdate(
    { _id },
    {
      $push: {
        listParticipant: participantId,
      },
    },
    // option supplementaire pour valider le changement de notre bd
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newParticipant;
}

async function addToInterestedList({ _id, interestedId }) {
  const newIntersted = await this.findOneAndUpdate(
    { _id },
    {
      $push: {
        listInterested: interestedId,
      },
    },
    // option supplementaire pour valider le changement de notre bd
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return newIntersted;
}

async function updateStatusPastEvent({ _id }) {
  const pastStatus = await this.findOneAndUpdate(
    { _id },

    {
      statut: "Passé",
    },

    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return pastStatus;
}

async function updateStatusTodayEvent({ _id }) {
  const todayStatus = await this.findOneAndUpdate(
    { _id },
    // on met à jour la valeur du statut
    {
      $set: {
        statut: "Aujourd'hui",
      },
    },

    // option supplementaire pour valider le changement de notre bd
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return todayStatus;
}

async function deleteEvent(_id) {
  const deleteEvent = await this.findOneAndDelete({ _id }).exec();
  return deleteEvent;
}

// Récupération d'un Model(exemple) mongoose sur la base du Schéma
const collectionName = "events";
export const eventModel = mongoose.model("event", EventSchema, collectionName);
