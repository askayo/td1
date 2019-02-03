import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Note = EmberObject.extend({
  content:'',
  MAX:100,
  size:computed('content',function(){
    this.set('info','');
    return this.content.length;
  }),
  info:'',
  style:computed('size',function() {
    if (this.get('size') > 0 & this.get('size') < 50) {
      return "alert alert-success";
    }
    if (this.get('size') > 50 & this.get('size') < 75) {
      return "alert alert-danger";
    }

      return "alert alert-info";
  })



});




export default Route.extend({
  model(){
    return Note.create();
  }
});
