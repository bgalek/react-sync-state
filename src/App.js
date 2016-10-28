import React, {Component} from 'react';
import StateSync from './StateSync'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Bartosz',
            secondName: 'Galek',
            age: 10,
            company: 'MyCompany'
        }
    }

    handleCompanyChange = (event) => this.setState({ company: event.target.value });

    render() {
        return (
            <div className="App">
                <p>synced input:</p>
                <StateSync initialState={this.state}>
                    {({ state, onChange }) => (
                        <form>
                            <input type="text" onChange={(event) => onChange({ firstName: event.target.value })} value={state.firstName} />
                            <input type="text" onChange={(event) => onChange({ secondName: event.target.value })} value={state.secondName} />
                        </form>
                    )}
                </StateSync>
            </div>
        );
    }
}