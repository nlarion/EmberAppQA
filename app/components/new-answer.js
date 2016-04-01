import Ember from 'ember';

export default Ember.Component.extend({
  newAnswer: false,
  actions: {
    showAnswerForm(){
      this.set('newAnswer', true);
    },
    submitAnswer(){
      var date = new Date();
      date = date.toString().substring(0,15);
      var params = {
        author: this.get('author'),
        date: date,
        downVotes: 0,
        question: this.get('question'),
        questionId: this.get('questionId'),
        theAnswer: this.get('theAnswer'),
        upVotes: 0
      };
      this.set('newAnswer', false);
      this.sendAction('submitAnswer', params);
    }
  }
});
