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
  }.property('inputstring', 'whitespace'),
  mostUsed: function(){
    var wordCounts = { };
    if(!Ember.isEmpty(this.get('inputstring'))){
      var inputstring = this.get('inputstring') ;
      var characters = {};
      var mostUsedCharacter = '';
      for(var i = 0; i < inputstring.length; i++)
        {
          var key = inputstring[i];
          if(!characters[key]){
            characters[key] = 0;
          }
          characters[key]++;
          if(mostUsedCharacter == '' || characters[key] > characters[mostUsedCharacter]){
            mostUsedCharacter = key;
          }
        }
        var frequency = characters[mostUsedCharacter];
        if(mostUsedCharacter === " ")
          mostUsedCharacter = "whitespace";
        return mostUsedCharacter + " (" + frequency  + ")";
    }
    return "";
  }.property('inputstring')
});
