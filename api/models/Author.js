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
  },

  beforeCreate: function() {
    console.log('in beforeCreate $$$$$$$%%^^^^^^^^#$WERW$#@$@WR#$@#$');
    Author.findOne('5225ba09dc3299b310000001').populate('books').done(function(err, rec){console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'); console.log(rec); });
  }
};
