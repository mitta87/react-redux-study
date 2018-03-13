import React from "react";
import Users from "./containers/Users";
import store from "./store";
import {Provider} from 'react-redux'

export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <Provider store={store}>
            <Users/>
        </Provider>;
    }
}