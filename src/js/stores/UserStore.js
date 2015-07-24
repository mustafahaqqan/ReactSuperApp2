import Dispatcher from '../Dispatcher';
import assign from 'object-assign';
import Constants from '../Constants';
import Fluxxor from 'fluxxor';

let User = {};

export default Fluxxor.createStore({
  initialize(options) {

    // We could also use this in place of the `actions` hash, above:
    this.bindActions({
      "SIGN_IN" : "signIn",
      "SIGN_OUT": "signOut"
    });

  },

  getUser(){
    return User;
  },

  getUserPhoto(){
    return User.photo;
  },

  getAuthData(){
    return firebaseRef.getAuth();
  }

});