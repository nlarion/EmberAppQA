import Ember from 'ember';

export function searchTags(params/*, hash*/) {
  if(params[0].get('tag') === params[1]){
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(searchTags);
