const firebase = require('firebase');
const credentials = require('../credentials.json');

export default class StateRepository {
    constructor(props) {
        firebase.initializeApp(credentials);
        this.db = firebase.database();
        this.db.ref('/opbox-admin').on('child_added', state => {
            props.onChange(state.val());
        });
    }

    pushState(state) {
        firebase.database().ref('/opbox-admin/').push(state);
    }
}