import Ember from 'ember';

export default Ember.ObjectController.extend({
  inputstring : null,
  hashed : function(){
    // return md5(this.get('inputstring'));
    return this.get('inputstring');
  }.property('inputstring')
});
