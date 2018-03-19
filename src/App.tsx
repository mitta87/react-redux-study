import * as React from "react";
import Users from "./containers/Users";
import store from "./store";
import { Provider } from "react-redux";


export interface AppProps {
  name: string;
}

const App = (props: AppProps) => (
    <Provider store={store}>
        <Users/>
    </Provider>
);

export default App;
