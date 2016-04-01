import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    submitQuestion(questionParams){
      console.log(questionParams);
      var newQuestion = this.store.createRecord('question', questionParams);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
