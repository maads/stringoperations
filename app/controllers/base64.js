import Ember from 'ember';

export default Ember.ObjectController.extend({
  inputstring: null,
  decoded : function(){
    if(!Ember.isEmpty(this.get('inputstring'))){
      var returnvalue = "";
      try{
        // Will fail if incorrect format
        returnvalue = decodeURIComponent(escape(window.atob( this.get('inputstring') )));
      }
      finally{
        return returnvalue;
      }
    }
    return "";
  }.property("inputstring"),
  encoded : function(){
    if(!Ember.isEmpty(this.get('inputstring'))){
      return window.btoa(unescape(encodeURIComponent( this.get('inputstring') )));
    }
    return "";
  }.property("inputstring")
});
