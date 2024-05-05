const Contact = require("./schemas/contacts");

const getContacts = async ({ page = 1, limit = 20, favorite }) => {
  const options = {};

  if (favorite !== undefined) {
    options.favorite = favorite;
  }

  const skip = (parseInt(page) - 1) * parseInt(limit);

  return await Contact.find(options).skip(skip).limit(parseInt(limit));
};

const getContactById = (id) => {
  return Contact.findOne({ _id: id });
};

const createContact = ({ name, email, phone }) => {
  return Contact.create({ name, email, phone });
};

const updateContact = (id, fields) => {
  return Contact.findOneAndUpdate({ _id: id }, fields, { new: true });
};

const removeContact = (id) => {
  return Contact.findOneAndDelete({ _id: id });
};

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  removeContact,
};