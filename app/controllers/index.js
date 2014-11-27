import Ember from 'ember';

export default Ember.ObjectController.extend({
  inputstring: null,
  whitespace : function(){
    if(!Ember.isEmpty(this.get('inputstring'))){
      return this.get('inputstring').split(' ').length - 1;
    }
    return 0;
  }.property('inputstring'),
  charactersWithoutWhitespace : function(){
    if(!Ember.isEmpty(this.get('inputstring'))){
      return this.get('inputstring').length - this.get('whitespace');
    }
    return 0;
  }.property('inputstring', 'whitespace')
});
