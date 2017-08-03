import React from 'react';
import Navigation from '../components/navigation';

class NavigationContainer extends React.Component {
    componentWillMount() {
        this.setState({
            items: [
                'home',
                'contact',
                'links'
            ]
        });
    }
    render() {
        return (
            <div>
                <Navigation items = {this.state.items} />
            </div>
        );
    }
}

export default NavigationContainer;
