import React, {Component} from 'react';
import StateRepository from './StateRepository'

export default class StateSync extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.initialState);
        this._updateState = this._updateState.bind(this);
        this._stateChangeHandler = this._stateChangeHandler.bind(this);
        this.stateRepository = new StateRepository({onChange: this._stateChangeHandler});
    }

    _stateChangeHandler(state) {
        console.log('_stateChangeHandler', JSON.stringify(state));
        this.setState(state);
    }

    _updateState(nextState) {
        console.log('_updateState');
        const state = Object.assign({}, this.state, nextState);
        this.stateRepository.pushState(state);
    }

    render() {
        return (
            <div data-synchronized>
                {this.props.children({
                    state: this.state,
                    onChange: (state) =>  this._updateState(state)
                })}
            </div>
        );
    }
}
