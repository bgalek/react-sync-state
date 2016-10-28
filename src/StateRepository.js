export default class StateRepository {
    constructor(props) {
        this.resource = `/${props.appId}/${props.key}`;
        this.db = props.firebase.database();
        this.db.ref(this.resource).on('value', state => {
            props.onChange(state.val());
        });
    }

    pushState(state) {
        this.db.ref(this.resource).update(state);
    }
}