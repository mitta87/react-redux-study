import * as React from "react";
import Users from "./containers/Users";
import store from "./store";
import { Provider } from "react-redux";
import { loadUsers } from "./actions";


export interface AppProps {
  name: string;
}

class App extends React.Component<AppProps, {}> {


  constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(loadUsers());
  }

  render() {
    return (<Provider store={store}>
            <Users/>
        </Provider>);
  }
}

export default App;
