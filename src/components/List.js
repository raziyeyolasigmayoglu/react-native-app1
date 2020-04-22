import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Detail from './Detail';

class List extends Component {
    state = {data: []};
    UNSAFE_componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({data: response.data}));
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    renderData(){
        return this.state.data.map((responseData, Id) =>
        <Detail key={Id} data = {responseData} />
        );

    }

    render() {
        console.log('gelen data' + this.state);
        console.log('render');
        return (
            <ScrollView style={{ marginTop:5 }}>
            {this.renderData()}
        </ScrollView>
        );
    }
}


export default List;
