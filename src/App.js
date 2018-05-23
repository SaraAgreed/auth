import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './component/common'

class App extends Component {
    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                <Text>An App</Text>
            </View>
        );
    }
}
const styles= {
    headerStyle: {
    
    }
};

export default App;