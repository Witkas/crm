import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import PeopleDetails from './PeopleDetail';
import { loadInitialContacts } from '../actions';

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
    }
})

class PeopleList extends Component {
    componentDidMount() {
        this.props.loadInitialContacts();
    }

    render() {
        return (
            <FlatList
                data={this.props.people}
                renderItem={({item}) => <PeopleItem people={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        people: state.people,
        detailView: state.detailView,
    }
}

export default connect(mapStateToProps, { loadInitialContacts })(PeopleList);
