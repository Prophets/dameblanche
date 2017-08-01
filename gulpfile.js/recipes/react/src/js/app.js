import React from 'react';
import {render} from 'react-dom';
import NavigationContainer from './containers/navigation-container';

class App extends React.Component {
    render() {
        return <div>
            <NavigationContainer />
            <p> Hello React!</p>
        </div>;
    }
}

render(<App/>, document.getElementById('main'));
