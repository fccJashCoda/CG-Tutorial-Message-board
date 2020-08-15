const db = require('./connection');
const Joi = require('joi');

const schema = Joi.object().keys({
  // - username - default to anonymous
  username: Joi.string().alphanum().required(),
  //     - subject
  subject: Joi.string().required(),
  //     - message
  message: Joi.string().max(500).required(),
  //     - imageURL
  imageURL: Joi.string().uri({
    scheme: [/https?/],
  }),
});

const messages = db.get('messages');

function getAll() {
  return messages.find();
}

function create(message) {
  if (!message.username) message.username = 'Anonymous';
  const result = schema.validate(message);
  if (result.error == null) {
    message.created = new Date();
    return messages.insert(message);
  }
  return Promise.reject(result.error);
}

module.exports = {
  getAll,
  create,
};
