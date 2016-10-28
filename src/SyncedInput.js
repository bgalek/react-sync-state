import React, {Component} from 'react';
import StateSync from './StateSync'

export default class SyncedInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 27
        }
    }

    render() {
        return (
            <StateSync appId="admin" stateId="age" initialState={this.state}>
                {({state, onChange}) => (
                    <form>
                        <input type="number" onChange={(event) => onChange({age: event.target.value})}
                               value={state.age}/>
                    </form>
                )}
            </StateSync>
        );
    }
}


