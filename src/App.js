import React, {Component} from 'react';
import StateSync from './StateSync';
import SyncedInput from './SyncedInput';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Bartosz',
            secondName: 'Gałek'
        }
    }

    render() {
        return (
            <div className="App" style={{padding:40}}>
                <p>synced component group:</p>
                <StateSync appId="admin" stateId="names" initialState={this.state}>
                    {({state, onChange}) => (
                        <form>
                            <input type="text" onChange={(event) => onChange({firstName: event.target.value})}
                                   value={state.firstName}/>
                            <input type="text" onChange={(event) => onChange({secondName: event.target.value})}
                                   value={state.secondName}/>
                        </form>
                    )}
                </StateSync>
                <p>synced separably</p>
                <SyncedInput />
            </div>
        );
    }
}