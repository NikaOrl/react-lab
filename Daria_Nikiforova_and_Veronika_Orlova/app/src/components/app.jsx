import React, { Component } from 'react';
import Messenger from "./Messenger/messenger";

export default class App extends Component {
    render() {
        return (
            <div className='app-wrapper'>
                <Messenger />
            </div>
        );
    }
}

