/**
 * Author
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {
  schema: true,
  adapter: 'mongoose',
  attributes: {
    name: 'string',
    // books: [{type: 'Schema.Types.ObjectId', ref: 'Book'}]
    books: {
      associate: { ref: 'Book', name: 'books' }
    }
  }
};
