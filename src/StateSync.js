import React, { Component } from 'react';
import StateRepository from './StateRepository'

const firebase = require('firebase');

firebase.initializeApp({
    "apiKey": "",
    "authDomain": "",
    "databaseURL": "",
    "projectId": "",
    "storageBucket": "",
    "messagingSenderId": ""
});

export default class StateSync extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.initialState);
        this._updateState = this._updateState.bind(this);
        this._stateChangeHandler = this._stateChangeHandler.bind(this);
        this.stateRepository = new StateRepository({
            firebase: firebase,
            appId: this.props.appId,
            key: this.props.stateId,
            onChange: this._stateChangeHandler
        });
    }

    _stateChangeHandler(state) {
        if (state) {
            this.setState(state);
        }
    }

    _updateState(nextState) {
        const state = Object.assign({}, this.state, nextState);
        this.stateRepository.pushState(state);
    }

    render() {
        return (
            <div data-synchronized>
                {this.props.children({
                    state: this.state,
                    onChange: (state) => this._updateState(state)
                })}
            </div>
        );
    }
}
