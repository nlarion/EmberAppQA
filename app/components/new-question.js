import Ember from 'ember';

export default Ember.Component.extend({
  newQuestion: false,
  actions: {
    showQuestionForm(){
      this.set('newQuestion', true);
    },
    submitQuestion(){
      console.log(this.get('dropdown'));
      var date = new Date();
      date = date.toString().substring(0,15);
      var questionParams = {
        question: this.get('question'),
        author: this.get('author'),
        date: date,
        tag: this.get('dropdown'),
        notes: this.get('notes'),
        upVotes: 0,
        downVotes: 0
      };
      this.set('newQuestion', false);
      this.sendAction('submitQuestion', questionParams);
    }
  }
});
