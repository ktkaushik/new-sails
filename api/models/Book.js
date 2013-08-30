/**
 * Book
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  schema: true,
  adapter: 'mongoose',

  attributes: {
    title: 'string',
    _creator: {
      // type: 'Schema.ObjectId'
       //author: [{ type: 'Schema.Types.ObjectId', ref: 'Author' } ]
      associate: { ref: 'Author', name: '_creator' }
    }
  }
};
